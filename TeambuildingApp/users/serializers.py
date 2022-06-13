from django.contrib.auth.models import User, Group
from html5lib import serialize
from rest_framework import serializers

from TeambuildingApp.users.models import Team, Profile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #fields = ['url', 'username', 'email', 'groups']
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    
    #def create(self, validated_data):
    #    user = User.objects.create_user(**validated_data)
    #    return user

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name']

    def to_representation(self, instance):
        return super().to_representation(instance)

class ProfileSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length = 4)
    class Meta:
        model = Profile
        fields = ['id', 'name', 'email', 'password']

    def to_representation(self, instance):
        return super().to_representation(instance)