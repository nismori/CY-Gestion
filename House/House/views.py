from django.shortcuts import render
from django.http import HttpResponse

def profil(request):
    return render(request,"page.html")

def default(request):
    return render(request,"default.html")