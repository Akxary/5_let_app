from django.shortcuts import render
from .models import Words
from django.template import loader
from django.http import HttpResponse, HttpRequest, JsonResponse

# Create your views here.


def words(request: HttpRequest) -> HttpResponse:
    # common_words = Words.objects.all().values()[:10]
    common_words = ', '.join(Words.objects.values_list("word", flat=True))
    # print(common_words[0])
    template = loader.get_template("words.html")
    context = {"words": common_words}
    return HttpResponse(template.render(context=context))


# безнадёжные попытки отправлять данные сторонним приложениям
def word_list(request: HttpRequest) -> HttpRequest:
    common_words = Words.objects.values_list("word", flat=True)  # .values()
    # print(common_words[:5])
    # common_words = [w["word"] for w in common_words]
    # response = JsonResponse({'text':common_words}) # , status=200, safe=
    response = HttpResponse(common_words)
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
    print(response.headers)
    return response
