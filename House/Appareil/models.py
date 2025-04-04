from django.db import models
from django.core.validators import *

class Appareil(models.Model):
    nom = models.CharField(max_length=30,default="error")
    marque = models.CharField(max_length=30,default="error")
    type = models.CharField(max_length=30,default="error")
    ACTIF = 'Connecté'
    INACTIF = 'Deconnecté'
    ETAT_CHOICES = [
        (ACTIF, 'Connecté'),
        (INACTIF, 'Deconnecté'),
    ]
    etat = models.CharField(max_length=20,choices=ETAT_CHOICES,default="Deconnecté")
    etat_de_batterie = models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(100)],default=0)
    WIFI = 'Wifi'
    ETHERNET = 'Ethernet'
    CONNECTIVITE_CHOICES = [
        (WIFI, 'Wifi'),
        (ETHERNET, 'Ethernet'),
    ]
    connectivite = models.CharField(max_length=20,choices=CONNECTIVITE_CHOICES,default="error")
    temperature = models.IntegerField(validators=[MinValueValidator(0)],null=True,blank=True)
    volume = models.IntegerField(validators=[MinValueValidator(0)],null=True,blank=True)


