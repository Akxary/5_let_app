from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("words/", views.words, name="words"),
    path("word-list/", views.word_list, name="full list of words"),
] #+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
