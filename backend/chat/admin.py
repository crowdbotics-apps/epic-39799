from django.contrib import admin
from .models import Chat,ChatMessage
admin.site.register(ChatMessage)
admin.site.register(Chat)

# Register your models here.
