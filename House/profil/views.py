from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

def test(request):
    return HttpResponse("<h1>GG</h1>")

def autre_profil(request):
    print("le blog")
    return render(request,"page.html")

class ArticleList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
