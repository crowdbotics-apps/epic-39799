
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PlayerViewSet
router = DefaultRouter()
router.register('player', PlayerViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
