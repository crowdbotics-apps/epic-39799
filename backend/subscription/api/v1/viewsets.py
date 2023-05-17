from rest_framework import authentication
from subscription.models import Subscription,SubscriptionFeature,SubscriptionPlan
from .serializers import SubscriptionSerializer,SubscriptionFeatureSerializer,SubscriptionPlanSerializer
from rest_framework import viewsets

class SubscriptionViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Subscription.objects.all()

class SubscriptionPlanViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionPlanSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = SubscriptionPlan.objects.all()

class SubscriptionFeatureViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionFeatureSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = SubscriptionFeature.objects.all()