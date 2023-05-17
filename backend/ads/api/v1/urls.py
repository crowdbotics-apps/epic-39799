
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AdvertisementViewSet
router = DefaultRouter()
router.register('advertisement', AdvertisementViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
