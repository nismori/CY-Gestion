from rest_framework import generics
from django.shortcuts import *
from .models import *
from .serializer import *

class AppareilView(generics.ListCreateAPIView):
    queryset = Appareil.objects.all()
    serializer_class = AppareilSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
    
    
def afficherAppareil(request):
    appareils = Appareil.objects.all()
    return render(request, 'appareils.html', {'appareils': appareils})
