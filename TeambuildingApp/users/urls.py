from django import urls
from django.urls import include, path
from rest_framework import routers
from TeambuildingApp.users import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework.urlpatterns import format_suffix_patterns

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
]
urlpatterns = format_suffix_patterns(urlpatterns)

