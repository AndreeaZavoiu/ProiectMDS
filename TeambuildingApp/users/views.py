from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from TeambuildingApp.users.serializers import *
from TeambuildingApp.users.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    #permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    
class HelloView(APIView):
    permission_classes = (IsAuthenticated,)         

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


