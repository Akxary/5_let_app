from django.db import models


# Create your models here.
class Words(models.Model):
    first_let = models.CharField(max_length=1, verbose_name="Первая буква слова")
    word = models.CharField(max_length=5, verbose_name="Слово из 5 букв")

    class Meta:
        verbose_name = "Слова из 5 букв"
        verbose_name_plural = verbose_name
        ordering = ["first_let"]

    def __str__(self):
        return self.word

# python manage.py shell -i ipython
# import sys
# import os
# sys.path.append(os.path.abspath('..'))
# with open('../src/5wDict.txt', mode='r', encoding='utf-8') as f:
#     words_ar = f.readlines()
# w_list = []
# for w in words_ar:
#     let = w[0]
#     w_ = w.strip('\r\n')
#     w_list.append(Words(first_let=let, word=w_))
# Words.objects.bulk_create(w_list)
