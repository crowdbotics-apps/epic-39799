from rest_framework import serializers
from subscription.models import Subscription,SubscriptionFeature,SubscriptionPlan

class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = "__all__"

class SubscriptionPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubscriptionPlan
        fields = "__all__"

class SubscriptionFeatureSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubscriptionFeature
        fields = "__all__"