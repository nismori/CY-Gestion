from django.db import models
from django.core.validators import *
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password, check_password


class Profil(models.Model):
    email = models.EmailField(max_length=200, unique=True, default="error")
    pseudo = models.CharField(max_length=30, default="error")
    age = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(120)], default=0)
    HOMME = 'H'
    FEMME = 'F'
    AUTRE = 'A'
    SEXE_CHOICES = [
        (HOMME, 'Homme'),
        (FEMME, 'Femme'),
        (AUTRE, 'Autre'),
    ]
    sexe = models.CharField(max_length=30, choices=SEXE_CHOICES, default="error")
    date_de_naissance = models.DateField(default="1900-01-01")
    type_de_membre = models.CharField(max_length=30, default="error")
    #photo = models.ImageField(upload_to='images/', null = True, blank = True)
    prenom = models.CharField(max_length=30, default="error")
    nom = models.CharField(max_length=30, default="error")
    mot_de_passe = models.CharField(max_length=128, default="error")
    
    
    
    def set_mot_de_passe(self, mot_de_passe):
        """Hacher et définir le mot de passe."""
        self.mot_de_passe = make_password(mot_de_passe)
    
    def check_mot_de_passe(self, mot_de_passe):
        """Vérifier si le mot de passe est correct."""
        return check_password(mot_de_passe, self.mot_de_passe)
    
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('L’email est requis')
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Aucune information requise ici, seulement l'email et le mot de passe

    objects = CustomUserManager()

    def __str__(self):
        return self.email