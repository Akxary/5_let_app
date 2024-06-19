#!/bin/bash

poetry run python manage.py collectstatic --no-input

poetry run python manage.py migrate --no-input

poetry run gunicorn five_let_app.wsgi:application --bind 0.0.0.0:8000