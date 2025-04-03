from rest_framework import serializers
from .models import *

class AppareilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appareil
        fields = '__all__'