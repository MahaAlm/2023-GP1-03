from celery import shared_task
from django.core.mail import send_mail
from .models import ChannelAnalysisHistory, ScheduledAnalysis, PlaylistAnalysisHistory
from .utils import get_youtube_client, analyze_channel, extractIdFromUrl, analyze_playlist
from celery.utils.log import get_task_logger
import json
from datetime import datetime, timedelta
from celery import Celery
from celery import shared_task
import logging
from django.conf import settings

@shared_task
def add(x, y):
    return x + y

logger = get_task_logger(__name__)
logger.setLevel(logging.INFO)

@shared_task
def calculate_next_run(frequency, indefinite=False):
    if indefinite:
        return 60  # returns 60 seconds for indefinite scheduling
    now = datetime.now()
    if frequency == 'by minute':
        return now + timedelta(minutes=1)  # calculate next run time by adding one minute
    elif frequency == 'hourly':
        return now + timedelta(hours=1)
    elif frequency == 'daily':
        return now + timedelta(days=1)
    elif frequency == 'weekly':
        return now + timedelta(weeks=1)
    elif frequency == 'monthly':
        return now + timedelta(weeks=4)


def prepare_analysis_context(channel_df, all_videos_df, all_playlists_df, top_3_videos, worst_3_videos, top_3_comments_analysis, worst_3_comments_analysis):
    if 'engagementScore' in all_videos_df.columns:
        all_videos_df.drop('engagementScore', axis=1, inplace=True)
    channel_df_csv = channel_df.to_csv(index=False)
    all_videos_csv = all_videos_df.to_csv(index=False)
    all_playlists_csv = all_playlists_df.to_csv(index=False)
    
    all_playlists_dict = all_playlists_df.to_dict(orient='records')

    all_playlists_csv = all_playlists_csv

    title = channel_df['Channel Name'].iloc[0]
    description = channel_df['description'].iloc[0]
    publishedAt = channel_df['publishedAt'].iloc[0]
    uniqueTags = list(channel_df['uniqueTags'].iloc[0])
    thumbnail = channel_df['thumbnail'].iloc[0]
    mostUsedCategories = channel_df['mostUsedCategories'].iloc[0]
    average_duration = int(channel_df['average_duration'].iloc[0])

    # Convert Pandas int64 values to native Python types for JSON serialization
    videoCount = int(channel_df['videoCount'].iloc[0])
    totalViews = int(channel_df['viewCount'].iloc[0])
    totalLikes = int(channel_df['likesCount'].iloc[0])
    totalComments = int(channel_df['commentCount'].iloc[0])
    subscriberCount = float(channel_df['subscriberCount'].iloc[0])
    PlaylistCount = int(channel_df['PlaylistCount'].iloc[0])

    # Convert the lists to native Python lists
    videos_publishedAt = all_videos_df['publishedAt'].tolist()
    videos_duration = all_videos_df['duration'].tolist()
    videos_views = all_videos_df['viewsCount'].tolist()
    videos_likes = all_videos_df['likesCount'].tolist()
    videos_commentCount = all_videos_df['commentCount'].tolist()
        
    top_5_videos = top_3_videos.to_dict(orient='records')
    worst_5_videos= worst_3_videos.to_dict(orient='records')
    if top_3_comments_analysis != []:
        top_5_comments_analysis_dist = top_3_comments_analysis[0].to_dict()
        top_5_comments = top_3_comments_analysis[1]
        
    if worst_3_comments_analysis != []:
        worst_5_comments_analysis_dist = worst_3_comments_analysis[0].to_dict()
        worst_5_comments = worst_3_comments_analysis[1]
     
                
    context= {   'title': title,

        'top_5_videos': top_5_videos,
            'worst_5_videos': worst_5_videos,
            'uniqueTags': uniqueTags,
            'description': description,
            'thumbnail': thumbnail,
            "publishedAt": publishedAt,
            'videos_publishedAt': videos_publishedAt,
            'videos_duration':videos_duration,
            'videos_likes': videos_likes,
            'videos_views': videos_views,
            'videos_commentCount': videos_commentCount,
            'all_playlists_dict': all_playlists_dict,
            'videoCount': videoCount,
            'totalViews': totalViews,
            'totalLikes': totalLikes,
            'totalComments': totalComments,
            'mostUsedCategories': mostUsedCategories,
            'channel_df_csv': channel_df_csv,
            'all_videos_info_csv': all_videos_csv,
            'all_playlists_csv': all_playlists_csv,
            'average_duration': average_duration,

                }
    context['top_5_comments_analysis_dist'] = top_5_comments_analysis_dist
    context['top_5_comments'] = top_5_comments
    context['worst_5_comments_analysis_dist'] = worst_5_comments_analysis_dist
    context['worst_5_comments'] = worst_5_comments
   
    
    return context
       
   
   
@shared_task
def perform_channel_analysis(history_id, scheduled_analysis_id):
    scheduled_analysis = ScheduledAnalysis.objects.get(id=scheduled_analysis_id)

    logger.info(f"History ID: {history_id}")
    if scheduled_analysis.is_active:

        try:
            history = ChannelAnalysisHistory.objects.get(id=history_id)
            user = history.user
            channel_url = history.channel_url
            logger.info(channel_url)
            youtube = get_youtube_client()
            channel_id = extractIdFromUrl(channel_url)
            channel_df, all_videos_df, all_playlists_df, top_3_videos, worst_3_videos, top_3_comments_analysis, worst_3_comments_analysis = analyze_channel(youtube, channel_id)
            logger.info('done analyzing')
            # Prepare context
            context = prepare_analysis_context(channel_df, all_videos_df, all_playlists_df, top_3_videos, worst_3_videos, top_3_comments_analysis, worst_3_comments_analysis)
            logger.info(context)
            # Store results in a new history record
            new_history = ChannelAnalysisHistory.objects.create(
                user=history.user,
                channel_url=history.channel_url,
                analysis_data=context
            )
            
            new_history.save()
            
            logger.info('history_saved')
            logger.info(user.email)

            
            
            send_mail(
                'Channel Analysis Complete',
                f'''
                    Hello Qusasa's user, {user.first_name}
                    Qusasa wish you're doing well and in a mood to see your scheduled analysis. Please log in to view the results,
                    
                    Qusasa team :)

                ''',
                'qusasacustomerservice@gmail.com',
                [user.email],
                fail_silently=False,
            )

            # Schedule next run if needed
            logger.info(f"active: {scheduled_analysis.is_active}")
            logger.info(f"number of times: : {scheduled_analysis.number_of_times}")
            logger.info(f"frequency: : {scheduled_analysis.frequency}")

            if scheduled_analysis.number_of_times == -1:
                # Run indefinitely every 60 seconds
                perform_channel_analysis.apply_async((history_id, scheduled_analysis.id), countdown=60)
            elif scheduled_analysis.number_of_times > 0:
                scheduled_analysis.number_of_times -= 1
                if scheduled_analysis.number_of_times == 0:
                    scheduled_analysis.is_active = False
                scheduled_analysis.save()
                eta = calculate_next_run(scheduled_analysis.frequency)
                logger.info(f"eta: : {eta}")
                perform_channel_analysis.apply_async((history_id, scheduled_analysis.id), eta=eta)

        except ChannelAnalysisHistory.DoesNotExist:
            logger.error(f"History record with ID {history_id} does not exist.")
        except ScheduledAnalysis.DoesNotExist:
            logger.error(f"ScheduledAnalysis record with ID {scheduled_analysis_id} does not exist.")
        except Exception as e:
            logger.error(f"Error performing channel analysis: {str(e)}")
    



def prepare_analysis_context_playlist(playlist_info_df, all_videos_info_df, top_5_videos, worst_5_videos, top_5_comments_analysis, worst_5_comments_analysis):
    if 'engagementScore' in all_videos_info_df.columns:
        all_videos_info_df.drop('engagementScore', axis=1, inplace=True)
    playlist_info_csv = playlist_info_df.to_csv(index=False)
    all_videos_info_csv = all_videos_info_df.to_csv(index=False)
    
    
    title = playlist_info_df['title'].iloc[0]
    description = playlist_info_df['description'].iloc[0]
    publishedAt = playlist_info_df['publishedAt'].iloc[0]
    uniqueTags = playlist_info_df['uniqueTags'].iloc[0]
    thumbnail = playlist_info_df['thumbnail'].iloc[0]

    # Convert Pandas int64 values to native Python types for JSON serialization
    videoCount = int(playlist_info_df['videoCount'].iloc[0])
    totalViews = int(playlist_info_df['totalViews'].iloc[0])
    totalLikes = int(playlist_info_df['totalLikes'].iloc[0])
    totalComments = int(playlist_info_df['totalComments'].iloc[0])
    average_duration = float(playlist_info_df['average_duration'].iloc[0])

    # Convert the lists to native Python lists
    videos_publishedAt = all_videos_info_df['publishedAt'].tolist()
    videos_duration = all_videos_info_df['duration'].tolist()
    videos_views = all_videos_info_df['viewsCount'].tolist()
    videos_likes = all_videos_info_df['likesCount'].tolist()
    videos_commentCount = all_videos_info_df['commentCount'].tolist()
        
    top_5_videos = top_5_videos.to_dict(orient='records')
    worst_5_videos = worst_5_videos.to_dict(orient='records')
    if top_5_comments_analysis != []:
        top_5_comments_analysis_dist = top_5_comments_analysis[0].to_dict()
        top_5_comments = top_5_comments_analysis[1]
        top_5_comments_analysis_dist = top_5_comments_analysis_dist
        top_5_comments = top_5_comments
    
            
    if worst_5_comments_analysis != []:
        worst_5_comments_analysis_dist = worst_5_comments_analysis[0].to_dict()
        worst_5_comments = worst_5_comments_analysis[1]
    
    context = {
            'top_5_videos':top_5_videos,
            'worst_5_videos': worst_5_videos,
            'uniqueTags': uniqueTags,
            'videos_publishedAt': videos_publishedAt,
            'videos_duration': videos_duration,
            'videos_likes': videos_likes,
            'videos_views':videos_views,
            'videos_commentCount': videos_commentCount,
                
                'title': title,
                'description': description,
                'thumbnail': thumbnail,
                'videoCount': videoCount,
                'totalViews': totalViews,
                'totalLikes': totalLikes,
                'totalComments': totalComments,
                'average_duration': average_duration,
                'uniqueTags': uniqueTags,
                'videos_publishedAt': videos_publishedAt,
                'videos_duration': videos_duration,
                'videos_likes': videos_likes,
                'videos_views': videos_views,
                'videos_commentCount': videos_commentCount,
        }
     
    if top_5_comments_analysis_dist:
        context['top_5_comments_analysis_dist'] = top_5_comments_analysis_dist
        context['top_5_comments'] = top_5_comments

    if worst_5_comments_analysis_dist: 
        context['worst_5_comments_analysis_dist'] = worst_5_comments_analysis_dist
        context['worst_5_comments'] = worst_5_comments

    return context
        
                


   
@shared_task
def perform_playlist_analysis(history_id, scheduled_analysis_id):
    logger.info(f"History ID: {history_id}")
    scheduled_analysis = ScheduledAnalysis.objects.get(id=scheduled_analysis_id)

    if scheduled_analysis.is_active:

        try:
            history = PlaylistAnalysisHistory.objects.get(id=history_id)
            user = history.user
            playlist_url = history.playlist_url
            logger.info(playlist_url)
            youtube = get_youtube_client()
            playlist_id = extractIdFromUrl(playlist_url)
            playlist_info_df, all_videos_info_df, top_5_videos, worst_5_videos, top_5_comments_analysis, worst_5_comments_analysis = analyze_playlist(youtube, playlist_id) 
            logger.info('done analyzing')
            # Prepare context
            context = prepare_analysis_context_playlist(playlist_info_df, all_videos_info_df, top_5_videos, worst_5_videos, top_5_comments_analysis, worst_5_comments_analysis)
            logger.info(context)
            # Store results in a new history record
            new_history = PlaylistAnalysisHistory.objects.create(
                user=history.user,
                playlist_url=history.playlist_url,
                analysis_data=context
            )
            
            new_history.save()
            
            logger.info('history_saved')
            logger.info(user.email)

            # Send email notification
            # send_mail(
            #     'Channel Analysis Complete',
            #     'Your scheduled analysis is complete. Please log in to view the results.',
            #     settings.EMAIL_HOST_USER,
            #     [user.email],
            #     fail_silently=False,
            # )
            
            send_mail(
                'Playlist Analysis Complete',
                'Your scheduled analysis is complete. Please log in to view the results.',
                settings.EMAIL_HOST_USER,
                [user.email],
                fail_silently=False,
            )

            # Schedule next run if needed
            logger.info(f"active: {scheduled_analysis.is_active}")
            logger.info(f"number of times: : {scheduled_analysis.number_of_times}")
            logger.info(f"frequency: : {scheduled_analysis.frequency}")

            if scheduled_analysis.number_of_times == -1:
                # Run indefinitely every 60 seconds
                perform_playlist_analysis.apply_async((history_id, scheduled_analysis.id), countdown=60)
            elif scheduled_analysis.number_of_times > 0:
                scheduled_analysis.number_of_times -= 1
                if scheduled_analysis.number_of_times == 0:
                    scheduled_analysis.is_active = False
                scheduled_analysis.save()
                eta = calculate_next_run(scheduled_analysis.frequency)
                logger.info(f"eta: : {eta}")
                perform_playlist_analysis.apply_async((history_id, scheduled_analysis.id), eta=eta)

        except PlaylistAnalysisHistory.DoesNotExist:
            logger.error(f"History record with ID {history_id} does not exist.")
        except ScheduledAnalysis.DoesNotExist:
            logger.error(f"ScheduledAnalysis record with ID {scheduled_analysis_id} does not exist.")
        except Exception as e:
            logger.error(f"Error performing channel analysis: {str(e)}")
    
    