from django.apps import AppConfig


class WordsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "words"
    verbose_name = "Все слова из 5 букв"
