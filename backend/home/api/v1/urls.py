from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BoardViewSet,BoardSpotViewSet,CharacterViewSet,CharacterRuleViewSet,ChessGameViewSet,GameInvitationViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('character', CharacterViewSet )
router.register('characterrule', CharacterRuleViewSet )
router.register('board', BoardViewSet )
router.register('chessgame', ChessGameViewSet )
router.register('boardspot', BoardSpotViewSet )
router.register('gameinvitation', GameInvitationViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
