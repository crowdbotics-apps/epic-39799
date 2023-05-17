
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ContactMessageViewSet,FeedbackMessageViewSet
router = DefaultRouter()
router.register('feedbackmessage', FeedbackMessageViewSet )
router.register('contactmessage', ContactMessageViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
