from rest_framework import authentication
from support.models import ContactMessage,FeedbackMessage
from .serializers import ContactMessageSerializer,FeedbackMessageSerializer
from rest_framework import viewsets

class FeedbackMessageViewSet(viewsets.ModelViewSet):
    serializer_class = FeedbackMessageSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = FeedbackMessage.objects.all()

class ContactMessageViewSet(viewsets.ModelViewSet):
    serializer_class = ContactMessageSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ContactMessage.objects.all()