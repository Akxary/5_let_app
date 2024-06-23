import os
from pathlib import Path
import mimetypes

mimetypes.add_type("text/javascript", ".js", True)
mimetypes.add_type("text/css", ".css", True)
# mimetypes.add_type("text/html", ".html", True)

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = "django-insecure-x9%qcgrd5g73+z_s*40rw+4f0g=qwg#eb8dxh7d%)$!e$c3qt#"
DEBUG = False
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
CSRF_TRUSTED_ORIGINS = [
    "http://localhost",
    "http://localhost:1337",
    "http://193.108.113.22",
    "http://193.108.113.22:1337",
    "http://www.5-bukv-custom-app.ru",
    "http://www.5-bukv-custom-app.ru:1337",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://django",
    "http://django:8000",
    "http://django:8000"
]
ALLOWED_HOSTS = CSRF_TRUSTED_ORIGINS + ["localhost", "django", "127.0.0.1", "193.108.113.22", "5-bukv-custom-app.ru",
                                        "www.5-bukv-custom-app.ru"]  # 'nctup-processing.ru'
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    # "django.contrib.static",
    "django.contrib.staticfiles",
    "words",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "five_let_app.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
WSGI_APPLICATION = "five_let_app.wsgi.application"
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

STATIC_ROOT = "/static/"  # comment this on dev
STATIC_URL = "/static/"
# STATICFILES_DIRS = [  #  uncomment this on dev
#     # os.path.join(BASE_DIR, "words", "static"),
#     os.path.join(BASE_DIR, "static"),
# ]
