# Use an official Python runtime as a base image
FROM --platform=linux/arm64 python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies
# Install system dependencies
# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    gcc \
    libpq-dev \
    pkg-config \
    g++ \
    build-essential \
    libffi-dev \
    libssl-dev \
    libhdf5-dev  
    
# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Add the rest of the code
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Command to run the application using Uvicorn with ASGI support
CMD ["uvicorn", "project_qusasa.asgi:application", "--host", "0.0.0.0", "--port", "8000", "--workers", "3"]
