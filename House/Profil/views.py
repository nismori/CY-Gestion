from rest_framework import generics
from .models import *
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import *
from django.shortcuts import *

    
class InscriptionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        mot_de_passe = request.data.get("mot_de_passe")
        pseudo = request.data.get("pseudo")
        prenom = request.data.get("prenom")
        nom = request.data.get("nom")
        

        if Profil.objects.filter(email=email).exists():     # verification dans la bdd de l'existance du mail
            return Response({"message": "Cet email est déjà utilisé."}, status=400)

        profil = Profil(email=email, pseudo=pseudo, prenom=prenom, nom=nom) # si tout est ok, il crée le nouvel utilisateur
        profil.set_mot_de_passe(mot_de_passe)  # hache le mot de passe
        profil.save()  # sauvegarder l'utilisateur dans la base de données
        
        return Response({"message": "Inscription réussie."}, status=201)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        mot_de_passe = request.data.get("mot_de_passe")

        try:
            profil = Profil.objects.get(email=email)
            if profil.check_mot_de_passe(mot_de_passe):
                # Retourner une réponse appropriée, par exemple un token JWT ou un message de succès
                return Response({"message": "Login réussi"}, status=200)
            else:
                return Response({"message": "Mot de passe incorrect"}, status=400)
        except Profil.DoesNotExist:
            return Response({"message": "Utilisateur non trouvé"}, status=400)


def afficherProfil(request):
    # Récupère tous les profils
    profils = Profil.objects.all()
    return render(request, 'profils.html', {'profils': profils})
