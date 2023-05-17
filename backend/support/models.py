from django.conf import settings
from django.db import models
class FeedbackMessage(models.Model):
    'Generated Model'
    subject = models.CharField(max_length=256,)
    feedbackMessage = models.TextField()
    replyMessage = models.TextField()
    player = models.ManyToManyField("users.User",blank=True,related_name="feedbackmessage_player",)
class ContactMessage(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    email = models.EmailField(max_length=254,)
    message = models.TextField()

# Create your models here.
