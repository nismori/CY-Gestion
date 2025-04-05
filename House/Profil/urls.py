from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('inscription/', InscriptionView.as_view(), name='inscription'),
]