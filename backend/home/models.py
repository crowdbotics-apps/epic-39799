from django.conf import settings
from django.db import models
class Character(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
    rules = models.ManyToManyField("home.CharacterRule",blank=True,related_name="character_rules",)
class CharacterRule(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
