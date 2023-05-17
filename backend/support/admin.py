from django.contrib import admin
from .models import ContactMessage,FeedbackMessage
admin.site.register(FeedbackMessage)
admin.site.register(ContactMessage)

# Register your models here.
