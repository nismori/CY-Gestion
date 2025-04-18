from .models import *
from .serializer import *
from rest_framework import status,generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import *
from django.shortcuts import *
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken


class ProfilView(generics.ListCreateAPIView):
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
    
    
def afficherAppareil(request):
    appareils = Profil.objects.all()
    return render(request, 'appareils.html', {'appareils': appareils})

    
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

        # Ajout de prints pour déboguer
        print(f"Email reçu : {email}")
        print(f"Mot de passe reçu : {mot_de_passe}")

        try:
            # Vérifier si l'utilisateur existe
            profil = Profil.objects.get(email=email)
            print(f"Utilisateur trouvé : {profil.email}")

            # Vérification du mot de passe
            if profil.check_mot_de_passe(mot_de_passe):
                print("Mot de passe correct")
                
                # Créer un token JWT
                refresh = RefreshToken.for_user(profil)
                access_token = str(refresh.access_token)
                refresh_token = str(refresh)

                # Retourner les tokens dans la réponse
                print("Tokens générés avec succès")
                return Response({
                    "message": "Login réussi",
                    "access": access_token,
                    "refresh": refresh_token
                }, status=200)
            else:
                print("Mot de passe incorrect")
                return Response({"message": "Mot de passe incorrect"}, status=400)
        except Profil.DoesNotExist:
            print(f"Utilisateur non trouvé pour l'email : {email}")
            return Response({"message": "Utilisateur non trouvé"}, status=400)

class GetUserByEmailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        email = request.query_params.get("email")
        if not email:
            return Response({"message": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            profil = Profil.objects.get(email=email)  # Recherche de l'utilisateur par email
            # Renvoie les informations de l'utilisateur sous forme de dictionnaire
            return Response({
                "prenom": profil.prenom,
                "nom": profil.nom,
                "email": profil.email,
                "pseudo": profil.pseudo,
            })
        except Profil.DoesNotExist:
            return Response({"message": "Utilisateur non trouvé."}, status=status.HTTP_404_NOT_FOUND)


class UpdateUserByEmailView(APIView):
    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):
        email = request.data.get("email")
        new_prenom = request.data.get("prenom")
        new_nom = request.data.get("nom")
        new_pseudo = request.data.get("pseudo")
        new_mot_de_passe = request.data.get("mot_de_passe")

        if not email:
            return Response({"message": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            profil = Profil.objects.get(email=email)  # Recherche de l'utilisateur par email

            # Met à jour les informations de l'utilisateur
            if new_prenom:
                profil.prenom = new_prenom
            if new_nom:
                profil.nom = new_nom
            if new_pseudo:
                profil.pseudo = new_pseudo
            if new_mot_de_passe:
                profil.set_mot_de_passe(new_mot_de_passe)  # Hache le nouveau mot de passe

            profil.save()  # Sauvegarde les modifications dans la base de données

            return Response({"message": "Utilisateur mis à jour avec succès."}, status=status.HTTP_200_OK)
        except Profil.DoesNotExist:
            return Response({"message": "Utilisateur non trouvé."}, status=status.HTTP_404_NOT_FOUND)



def afficherProfil(request):
    # Récupère tous les profils
    profils = Profil.objects.all()
    return render(request, 'profils.html', {'profils': profils})

class LogedView(APIView):
    def get(self, request):
        print("Requête reçue sur /loged/")
        print("Token : ", request.headers.get("Authorization"))
        # ton code ici
        return Response({"message": "Token validé"}, status=status.HTTP_200_OK)