
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CreditCardViewSet,PaymentViewSet
router = DefaultRouter()
router.register('payment', PaymentViewSet )
router.register('creditcard', CreditCardViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
