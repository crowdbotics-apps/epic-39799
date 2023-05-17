from django.conf import settings
from django.db import models
class Advertisement(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    message = models.TextField()
    image = models.URLField()
    configuration = models.CharField(max_length=256,)

# Create your models here.
