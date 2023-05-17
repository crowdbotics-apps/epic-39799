from django.conf import settings
from django.db import models
class ChatMessage(models.Model):
    'Generated Model'
    timestamp = models.DateTimeField()
    player = models.ManyToManyField("users.User",related_name="chatmessage_player",)
    message = models.TextField()
class Chat(models.Model):
    'Generated Model'
    players = models.ManyToManyField("users.User",related_name="chat_players",)
    messages = models.ManyToManyField("chat.ChatMessage",blank=True,related_name="chat_messages",)

# Create your models here.
