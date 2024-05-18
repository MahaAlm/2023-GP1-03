from django.apps import AppConfig
import logging

# Set up Django's logger
logger = logging.getLogger(__name__)

class QusasaConfig(AppConfig):
    name = 'qusasa'
    verbose_name = "Qusasa Application"

    def ready(self):
       return 'ready'
