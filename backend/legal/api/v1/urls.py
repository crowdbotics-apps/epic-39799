
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PrivacyPolicyViewSet,TermsViewSet
router = DefaultRouter()
router.register('terms', TermsViewSet )
router.register('privacypolicy', PrivacyPolicyViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
