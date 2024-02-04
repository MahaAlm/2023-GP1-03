;/*FB_PKG_DELIM*/

__d("polarisMediaSrcSetResolver.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,concreteType:"XDTImageVersion2",kind:"LinkedField",name:"image_versions2",plural:!1,selections:[{alias:null,args:null,concreteType:"XDTImageCandidate",kind:"LinkedField",name:"candidates",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"polarisMediaSrcSetResolver",selections:[{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[a],storageKey:null},a],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisShowFooterCTAFragment_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},b={alias:null,args:null,concreteType:"XDTIconSpec",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_glyph",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null}],storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"dark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"light",storageKey:null}];c=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_chevron",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"is_text_centered",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"secondary_text_color",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"text_color",plural:!1,selections:c,storageKey:null}];c={alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{kind:"InlineDataFragmentSpread",name:"polarisReadInlineMediaOverlayInfo_inline_media_overlay",selections:[{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"banner",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"XDTBloksRenderResponse",kind:"LinkedField",name:"bloks_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"buttons",plural:!0,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_applied_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sub_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],args:null,argumentDefinitions:[]}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisShowFooterCTAFragment_media",selections:[{kind:"RequiredField",field:a,action:"THROW",path:"pk"},{alias:null,args:null,kind:"ScalarField",name:"carousel_media_count",storageKey:null},{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"carousel_media.pk"},c],storageKey:null},c],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("polarisReadInlineMediaOverlayInfo_inline_media_overlay.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"polarisReadInlineMediaOverlayInfo_inline_media_overlay"};e.exports=a}),null);
__d("usePolarisMediaOverlayMediaCoverInfo_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,concreteType:"XDTIconSpec",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_glyph",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null}],storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"dark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"light",storageKey:null}];b=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_chevron",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"is_text_centered",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"secondary_text_color",plural:!1,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"text_color",plural:!1,selections:b,storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaOverlayMediaCoverInfo_media",selections:[{alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{kind:"InlineDataFragmentSpread",name:"polarisReadInlineMediaOverlayInfo_inline_media_overlay",selections:[{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"banner",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"XDTBloksRenderResponse",kind:"LinkedField",name:"bloks_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"buttons",plural:!0,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_applied_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sub_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],args:null,argumentDefinitions:[]}],storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("polarisMediaSrcSetResolver",["PolarisMediaConstants","polarisMediaSrcSetResolver.graphql","relay-runtime/store/ResolverFragments"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var c,e;a=d("relay-runtime/store/ResolverFragments").readFragment(h!==void 0?h:h=b("polarisMediaSrcSetResolver.graphql"),a);a=a.media_type===d("PolarisMediaConstants").MediaTypes.CAROUSEL_V2&&((c=a.carousel_media)==null?void 0:(c=c[0].image_versions2)==null?void 0:c.candidates)!=null?a.carousel_media[0].image_versions2.candidates:(c=a.image_versions2)==null?void 0:c.candidates;if(a==null||a.length===0)return void 0;c=a[0];c=((e=c.width)!=null?e:0)/((e=c.height)!=null?e:0);e=[];for(var a=a,f=Array.isArray(a),g=0,a=f?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(g>=a.length)break;i=a[g++]}else{g=a.next();if(g.done)break;i=g.value}i=i;var j=i.height,k=i.url;i=i.width;if(j==null||k==null||i==null)continue;var l=i/j;if(Math.abs(l-c)>.01)continue;e.push({configHeight:j,configWidth:i,src:k})}return e}g.client__srcSet=a}),98);
__d("polarisReadInlineMediaOverlayInfo",["CometRelay","polarisReadInlineMediaOverlayInfo_inline_media_overlay.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return d("CometRelay").readInlineData(h!==void 0?h:h=b("polarisReadInlineMediaOverlayInfo_inline_media_overlay.graphql"),a)}g["default"]=a}),98);
__d("usePolarisShowFooterCTA.next.react",["CometRelay","polarisMediaOverlayInfoUtils","polarisReadInlineMediaOverlayInfo","react","usePolarisShowFooterCTAFragment_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;e=i||d("react");e.useMemo;var j=e.unstable_useMemoCache;function a(a,e,f,g){var i=j(16);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisShowFooterCTAFragment_media.graphql"),a);bb50:{if(g===!0){g=null;break bb50}var k=a.carousel_media_count!=null&&a.carousel_media_count>0,l=null,m=null;if(k===!0){if(i[0]!==a.carousel_media||i[1]!==e){var n;n=(n=a.carousel_media)==null?void 0:n[e];i[0]=a.carousel_media;i[1]=e;i[2]=n}else n=i[2];e=n;if(e!=null){n=f[e.pk]===!0;if(i[3]!==e||i[4]!==n||i[5]!==m){var o=e.media_overlay_info!=null?c("polarisReadInlineMediaOverlayInfo")(e.media_overlay_info):null;if(o!=null){var p=d("polarisMediaOverlayInfoUtils").isMediaOverlayLayoutSupported(o==null?void 0:o.overlay_layout);p&&(m=d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(o,n));m!=null&&(l=e.pk)}i[3]=e;i[4]=n;i[5]=m;i[6]=m;i[7]=l}else m=i[6],l=i[7]}}if(l==null){p=f[a.pk]===!0;if(i[8]!==a||i[9]!==p){o=a.media_overlay_info!=null?c("polarisReadInlineMediaOverlayInfo")(a.media_overlay_info):null;o!=null&&(m=d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(o,p),m!=null&&(l=a.pk));i[8]=a;i[9]=p;i[10]=m;i[11]=l}else m=i[10],l=i[11]}if(l==null||m==null){g=null;break bb50}i[12]!==m||i[13]!==k||i[14]!==l?(e={bottomBannerInfo:m,isParentPostSidecar:k,itemWithBannerID:l},i[12]=m,i[13]=k,i[14]=l,i[15]=e):e=i[15];g=e}return g}g["default"]=a}),98);
__d("usePolarisMediaOverlayMediaCoverInfo",["CometRelay","polarisMediaOverlayInfoUtils","polarisReadInlineMediaOverlayInfo","react","usePolarisMediaOverlayMediaCoverInfo_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;e=i||d("react");e.useMemo;var j=e.unstable_useMemoCache;function a(a){var e=j(6);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisMediaOverlayMediaCoverInfo_media.graphql"),a);var f;bb19:{if((a==null?void 0:a.media_overlay_info)==null){f=null;break bb19}var g;if(e[0]!==a.media_overlay_info){var i=c("polarisReadInlineMediaOverlayInfo")(a.media_overlay_info);g=d("polarisMediaOverlayInfoUtils").isMediaOverlayLayoutSupported(i==null?void 0:i.overlay_layout);i=d("polarisMediaOverlayInfoUtils").getMediaOverlayMediaCoverInfo(i);e[0]=a.media_overlay_info;e[1]=i;e[2]=g}else i=e[1],g=e[2];a=i;e[3]!==g||e[4]!==a?(i=g?a:null,e[3]=g,e[4]=a,e[5]=i):i=e[5];f=i}return f}g["default"]=a}),98);
__d("PolarisFacepile.next.react",["CometPressable.react","IGDSBox.react","IGDSConstants","Locale","PolarisErrorBoundary.react","PolarisUserAvatar.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h,k={avatar:{boxSizing:"x1afcbsf",$$css:!0},avatarContainer:{alignItems:"x6s0dn4",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},opaqueBorder:{borderTopColor:"x1yhmmig",borderEndColor:"xeqyd3i",borderBottomColor:"xyb01ml",borderStartColor:"xdn568n",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",$$css:!0},overlapRight:{marginEnd:"x6zhf5e",marginLeft:null,marginRight:null,$$css:!0},transparentBorder:{backgroundColor:"x1k74hu9",borderTopColor:"x1v8p93f",borderEndColor:"xogb00i",borderBottomColor:"x16stqrj",borderStartColor:"x1ftr3km",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"xamhcws",borderEndWidth:"xol2nv",borderBottomWidth:"xlxy82",borderStartWidth:"x19p7ews",$$css:!0}};function a(a){var b=i(12),d=a.avatarSize,e=a.border,f=a.onClick,g=a.userProfilePicUrls;a=d===void 0?"extraSmall":d;var h=e===void 0?"opaque":e;if(g.length===0)return null;var l=c("IGDSConstants").AVATAR_SIZES[a];if(b[0]!==g||b[1]!==l||b[2]!==f||b[3]!==h){b[5]!==l||b[6]!==g.length||b[7]!==f||b[8]!==h?(d=function(a,b){var d={height:l+"px",order:String(c("Locale").isRTL()?b+1:g.length-(b+1)),width:l+"px"};return j.jsx(c("CometPressable.react"),{onPress:f,style:d,xstyle:[k.avatarContainer,b>0&&k.overlapRight],children:j.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:function(a){return null},children:j.jsx(c("PolarisUserAvatar.react"),{isLink:!1,profilePictureUrl:a,size:l,xstyle:[k.avatar,h==="opaque"&&k.opaqueBorder,h==="transparent"&&k.transparentBorder]})})},a)},b[5]=l,b[6]=g.length,b[7]=f,b[8]=h,b[9]=d):d=b[9];e=[].concat(g).reverse().map(d);b[0]=g;b[1]=l;b[2]=f;b[3]=h;b[4]=e}else e=b[4];b[10]!==e?(a=j.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",justifyContent:"end",children:e}),b[10]=e,b[11]=a):a=b[11];return a}g["default"]=a}),98);