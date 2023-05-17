from rest_framework import serializers
from legal.models import PrivacyPolicy,Terms

class TermsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Terms
        fields = "__all__"

class PrivacyPolicySerializer(serializers.ModelSerializer):

    class Meta:
        model = PrivacyPolicy
        fields = "__all__"