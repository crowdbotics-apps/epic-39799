from django.conf import settings
from django.db import models
class Character(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
class Player(models.Model):
    'Generated Model'
    name = models.TextField()
