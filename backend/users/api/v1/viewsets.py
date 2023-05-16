from rest_framework import authentication
from users.models import Player
from .serializers import PlayerSerializer
from rest_framework import viewsets

class PlayerViewSet(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Player.objects.all()