from django.conf import settings
from django.db import models
class Character(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
class Player(models.Model):
    'Generated Model'
    name = models.TextField()
    username = models.CharField(max_length=256,null=True,blank=True,)
    email = models.EmailField(max_length=254,null=True,blank=True,)
    friends = models.ManyToManyField("home.Player",blank=True,related_name="player_friends",)
    profilePicture = models.URLField(null=True,blank=True,)
    rank = models.IntegerField(null=True,blank=True,)
    level = models.IntegerField(null=True,blank=True,)
    acceptedTerms = models.BooleanField(null=True,blank=True,)
    acceptedPrivacyPolicy = models.BooleanField(null=True,blank=True,)
    isBlocked = models.BooleanField(null=True,blank=True,)
