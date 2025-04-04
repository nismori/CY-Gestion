from rest_framework import generics
from .models import *
from .serializer import *

class ProfilView(generics.ListCreateAPIView):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
