from rest_framework import serializers
from ads.models import Advertisement

class AdvertisementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advertisement
        fields = "__all__"