# Use an official Python runtime as a base image
FROM --platform=linux/amd64 python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

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
    libhdf5-dev && \
    rm -rf /var/lib/apt/lists/* \
    uvicorn \
    postgresql-client


# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install torch==2.2.0+cpu -f https://download.pytorch.org/whl/torch_stable.html && \
    pip install -r requirements.txt

# Copy the rest of the application
COPY . .

# Create and set permissions for the log directory
RUN mkdir -p /var/log/project_qusasa && \
    chmod -R 755 /var/log/project_qusasa

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose port 8000 to the outside world
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "project_qusasa.asgi:application", "--host", "0.0.0.0", "--port", "8000", "--workers", "3"]
