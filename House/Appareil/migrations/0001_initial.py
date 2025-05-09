# Generated by Django 4.2.11 on 2025-04-05 15:30

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appareil',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(default='error', max_length=30)),
                ('marque', models.CharField(default='error', max_length=30)),
                ('type', models.CharField(default='error', max_length=30)),
                ('etat', models.CharField(choices=[('Connecté', 'Connecté'), ('Deconnecté', 'Deconnecté')], default='Deconnecté', max_length=20)),
                ('etat_de_batterie', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('connectivite', models.CharField(choices=[('Wifi', 'Wifi'), ('Ethernet', 'Ethernet')], default='error', max_length=20)),
                ('temperature', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('volume', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(0)])),
            ],
        ),
    ]
