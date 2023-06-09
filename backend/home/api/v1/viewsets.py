from rest_framework import viewsets
from home.models import Board,BoardSpot,Character,CharacterRule,ChessGame,FriendRequest,GameInvitation
from .serializers import BoardSerializer,BoardSpotSerializer,CharacterSerializer,CharacterRuleSerializer,ChessGameSerializer,FriendRequestSerializer,GameInvitationSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class CharacterViewSet(viewsets.ModelViewSet):
    serializer_class = CharacterSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Character.objects.all()

class CharacterRuleViewSet(viewsets.ModelViewSet):
    serializer_class = CharacterRuleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = CharacterRule.objects.all()

class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Board.objects.all()

class ChessGameViewSet(viewsets.ModelViewSet):
    serializer_class = ChessGameSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ChessGame.objects.all()

class BoardSpotViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSpotSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = BoardSpot.objects.all()

class GameInvitationViewSet(viewsets.ModelViewSet):
    serializer_class = GameInvitationSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = GameInvitation.objects.all()

class FriendRequestViewSet(viewsets.ModelViewSet):
    serializer_class = FriendRequestSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = FriendRequest.objects.all()
