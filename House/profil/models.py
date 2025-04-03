from django.db import models

class Profil(models.Model):
    pseudo = models.CharField(max_length=30,default="error")
    age = models.IntegerField(default=0)

    HOMME = 'H'
    FEMME = 'F'
    AUTRE = 'A'
    SEXE_CHOICES = [
        (HOMME, 'Homme'),
        (FEMME, 'Femme'),
        (AUTRE, 'Autre'),
    ]
    sexe = models.CharField(max_length=30,default="error")

    date_de_naissance = models.DateField(default="1900-01-01")
    type_de_membre = models.CharField(max_length=30,default="error")
    photo = models.ImageField(default="error")
    prenom = models.CharField(max_length=30,default="error")
    nom = models.CharField(max_length=30,default="error")
    mot_de_passe = models.CharField(max_length=50,default="error")