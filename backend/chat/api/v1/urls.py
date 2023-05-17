
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ChatViewSet,ChatMessageViewSet
router = DefaultRouter()
router.register('chatmessage', ChatMessageViewSet )
router.register('chat', ChatViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
