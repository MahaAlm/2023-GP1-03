# Generated by Django 4.2.6 on 2024-02-26 17:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    dependencies = [
        ("qusasa", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Inquiry",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=1000)),
                ("InqContent", models.TextField()),
                ("RepContent", models.TextField()),
                (
                    "status",
                    models.CharField(
                        choices=[("WAITING", "Waiting"), ("RESOLVED", "Resolved")],
                        max_length=20,
                    ),
                ),
                ("date_posted", models.DateTimeField(auto_now_add=True)),
                (
                    "date_resolved",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                (
                    "author",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]