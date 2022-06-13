from django.db import models

'''
class Lead(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  message = models.CharField(max_length=100, blank=True)
  owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
'''

class Team(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        app_label = 'users'

class Profile(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    #password = models.CharField(max_length=30)
    company_name = models.CharField(max_length=20)

    class Meta:
        app_label = 'users'

