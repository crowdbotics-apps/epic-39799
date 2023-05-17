from rest_framework import authentication
from chat.models import Chat,ChatMessage
from .serializers import ChatSerializer,ChatMessageSerializer
from rest_framework import viewsets

class ChatMessageViewSet(viewsets.ModelViewSet):
    serializer_class = ChatMessageSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ChatMessage.objects.all()

class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Chat.objects.all()