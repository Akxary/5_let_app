# Generated by Django 5.0.2 on 2024-06-16 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("words", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="words",
            options={
                "ordering": ["first_let"],
                "verbose_name": "Слова из 5 букв",
                "verbose_name_plural": "Слова из 5 букв",
            },
        ),
        migrations.AlterField(
            model_name="words",
            name="first_let",
            field=models.CharField(max_length=1, verbose_name="Первая буква слова"),
        ),
        migrations.AlterField(
            model_name="words",
            name="word",
            field=models.CharField(max_length=5, verbose_name="Слово из 5 букв"),
        ),
    ]
