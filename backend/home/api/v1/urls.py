from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CharacterViewSet,PlayerViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('character', CharacterViewSet )
router.register('player', PlayerViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
