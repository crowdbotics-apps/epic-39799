from rest_framework import serializers
from support.models import ContactMessage,FeedbackMessage

class FeedbackMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = FeedbackMessage
        fields = "__all__"

class ContactMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactMessage
        fields = "__all__"