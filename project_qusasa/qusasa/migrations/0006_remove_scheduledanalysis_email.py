# Generated by Django 4.2.6 on 2024-04-21 14:23

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("qusasa", "0005_scheduledanalysis_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="scheduledanalysis",
            name="email",
        ),
    ]
