from django.conf import settings
from django.db import models
class Player(models.Model):
    'Generated Model'
    name = models.TextField()
    level = models.IntegerField(null=True,blank=True,)
class Character(models.Model):
    'Generated Model'
    name = models.TextField()
