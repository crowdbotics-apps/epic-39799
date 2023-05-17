from rest_framework import authentication
from ads.models import Advertisement
from .serializers import AdvertisementSerializer
from rest_framework import viewsets

class AdvertisementViewSet(viewsets.ModelViewSet):
    serializer_class = AdvertisementSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Advertisement.objects.all()