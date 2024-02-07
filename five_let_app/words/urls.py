from django.urls import path
from . import views

urlpatterns = [
    path("words/", views.words, name="words"),
    path("word-list/", views.word_list, name="full list of words"),
]
