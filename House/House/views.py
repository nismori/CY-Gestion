from django.shortcuts import render
from django.http import HttpResponse

def profil(request):
    return render(request,"page.html")

def default(request):
    return HttpResponse("<h1 align='center'>La base de donnée de Profil est dans <u>http://127.0.0.1:8000/profil/</u> et celle de Appareil dans <u>http://127.0.0.1:8000/appareil/</u>.<br>Le path admin n'a pas de superutilisateur enregistré.")