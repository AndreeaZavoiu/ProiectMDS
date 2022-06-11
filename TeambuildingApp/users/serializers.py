from django.contrib.auth.models import User, Group
from rest_framework.serializers import *
from django.contrib.auth.views import LoginView


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        #fields = ['url', 'username', 'email', 'groups']
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    
    #def create(self, validated_data):
    #    user = User.objects.create_user(**validated_data)
    #    return user

class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']