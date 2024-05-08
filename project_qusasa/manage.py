#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project_qusasa.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)



import os
import dotenv

if __name__ == "__main__":
    env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
    print("Env path:", env_path)  # This will show you the path being constructed
    dotenv.load_dotenv(env_path)
    # Load environment variables from .env file

    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_qusasa.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
