from django.shortcuts import render
from django.http import HttpResponse

def test(request):
    return HttpResponse("<h1>GG</h1>")

def autre_profil(request):
    print("le blog")
    return render(request,"page.html")

# Create your views here.
