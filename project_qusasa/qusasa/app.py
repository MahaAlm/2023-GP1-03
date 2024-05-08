from django.apps import AppConfig
from transformers import BertTokenizer, AutoModelForSequenceClassification, logging as hf_logging
import logging

# Set up Hugging Face transformers logging to capture download progress
hf_logging.set_verbosity_info()

# Set up Django's logger
logger = logging.getLogger(__name__)

class QusasaConfig(AppConfig):
    name = 'qusasa'
    verbose_name = "Qusasa Application"

    def ready(self):
        if not hasattr(self, 'model'):
            logger.info("Loading BERT model from Hugging Face...")
            self.tokenizer = BertTokenizer.from_pretrained('bhadresh-savani/bert-base-go-emotion')
            self.model = AutoModelForSequenceClassification.from_pretrained('bhadresh-savani/bert-base-go-emotion')
            logger.info("BERT model successfully loaded.")
