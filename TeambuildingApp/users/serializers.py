from django.contrib.auth.models import User, Group
from rest_framework import serializers
from django.contrib.auth import authenticate
from TeambuildingApp.users.models import *


class UserSerializer(serializers.ModelSerializer):
    # details = serializers.SerializerMethodField(method_name='get_details')

    # def get_details(self, obj):
    #     print(obj)
    #     if obj.details != None: 
    #         serializer = SimplifiedDetailsSerializer(obj.details)
    #         return serializer.data
    #     return {}

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password','is_staff']
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}
    

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class TeamSerializer(serializers.ModelSerializer):
    activity = serializers.SerializerMethodField(method_name='get_activity')

    def get_activity(self, obj):
        serializer = SimplifiedActivitySerializer(obj.activity)
        return serializer.data

    class Meta:
        model = Team
        fields = ['id', 'name', 'activity']

    # def to_representation(self, instance):
    #     return super().to_representation(instance)

class CreateTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'activity']

class SimplifiedDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = "__all__"

class DetailsSerializer(serializers.ModelSerializer):
    user_data = serializers.SerializerMethodField(method_name='get_is_staff')

    def get_is_staff(self, obj):
        # users = User.objects.filter(id = obj.user_id)
        # print(users.get().is_staff)
        # if users.count() > 0:
            serializer = UserSerializer(obj.user)
            #print(serializer.data.get('is_staff'))
            return serializer.data
        # return {}

    class Meta:
        model = Details
        fields = ['user_id','company_name', 'user_data']

class ActivitySerializer(serializers.ModelSerializer):
    teams =  serializers.SerializerMethodField(method_name='get_teams')

    def get_teams(self, obj):
        teams = Team.objects.filter(activity = obj)
        if teams.count() > 0:
            serializer = TeamSerializer(teams, many = True)
            return serializer.data
        return {}
    # teams = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    class Meta:
        model = Activity
        fields = ['id', 'name', 'location', 'teams']

class SimplifiedActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name', 'location']

class SimplifiedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['is_staff']


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
    return user

# Login Serailizer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

class MemberSerializer(serializers.ModelSerializer):
  class Meta:
    model = Member
    fields = '__all__'