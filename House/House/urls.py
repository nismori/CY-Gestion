"""
URL configuration for House project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import *
from .views import *
from Profil.views import *
from Appareil.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',default),
    path('profil/',ProfilView.as_view(), name="anything"),
    path('appareil/',AppareilView.as_view(), name="anything"),  
    path('', include('Profil.urls')),
    path('showProfil/', afficherProfil),
    path('showAppareil/', afficherAppareil),
    path('api/get_user_by_email/', GetUserByEmailView.as_view(), name='get_user_by_email'),
    path('login/', LoginView.as_view(), name='login'),
    path('inscription/', InscriptionView.as_view(), name='inscription'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('loged/', LogedView.as_view(), name='loged'),
]
