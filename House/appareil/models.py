from django.db import models

class Appareil(models.Model):
    pseudo = models.CharField(max_length=30,default="error")
    age = models.IntegerField(default=0)