# profil/urls.py
from django.urls import path
from .views import ArticleList, ArticleDetail

urlpatterns = [
    path('api/articles/', ArticleList.as_view(), name='article-list'),
    path('api/articles/<int:pk>/', ArticleDetail.as_view(), name='article-detail'),
]