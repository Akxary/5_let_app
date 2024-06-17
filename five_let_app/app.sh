#!/bin/bash

poetry run python manage.py migrate --noinput

poetry run gunicorn five_let_app.wsgi:application --bind 0.0.0.0:8000