"""TeambuildingApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path, include


from rest_framework.routers import DefaultRouter
from TeambuildingApp.users import views
import TeambuildingApp.users.views
import TeambuildingApp.users.api_views

urlpatterns = [
    path('', include('TeambuildingApp.public.urls')),
    path('users/', include('TeambuildingApp.users.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls')),
    path('user/', include('TeambuildingApp.users.urls')),

    path('api/v1/teams/', TeambuildingApp.users.api_views.TeamList.as_view()),
    path('api/v1/teams/new', TeambuildingApp.users.api_views.TeamCreate.as_view()),
    path('api/v1/teams/<int:id>', TeambuildingApp.users.api_views.TeamRetrieveUpdateDestroy.as_view()),
    
]
