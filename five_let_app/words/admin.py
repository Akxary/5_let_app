from django.contrib import admin

from .models import Words


# Register your models here.

class WordsAdmin(admin.ModelAdmin):
    list_display = ("first_let", "word")
    list_display_links = ("first_let", "word")
    list_filter = ("first_let",)
    search_fields = ("first_let", "word")


admin.site.register(Words, WordsAdmin)
