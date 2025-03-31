from django.http import HttpResponse
from django.shortcuts import render 

def profil(request):
    return render(request,"page.html")