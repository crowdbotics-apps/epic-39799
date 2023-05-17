from django.conf import settings
from django.db import models
class Notification(models.Model):
    'Generated Model'
    timestamp = models.DateTimeField()
    message = models.CharField(max_length=256,)
    wasRead = models.BooleanField()

# Create your models here.
