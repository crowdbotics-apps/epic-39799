
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import SubscriptionViewSet,SubscriptionFeatureViewSet,SubscriptionPlanViewSet
router = DefaultRouter()
router.register('subscription', SubscriptionViewSet )
router.register('subscriptionplan', SubscriptionPlanViewSet )
router.register('subscriptionfeature', SubscriptionFeatureViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
