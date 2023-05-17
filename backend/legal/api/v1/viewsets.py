from rest_framework import authentication
from legal.models import PrivacyPolicy,Terms
from .serializers import PrivacyPolicySerializer,TermsSerializer
from rest_framework import viewsets

class TermsViewSet(viewsets.ModelViewSet):
    serializer_class = TermsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Terms.objects.all()

class PrivacyPolicyViewSet(viewsets.ModelViewSet):
    serializer_class = PrivacyPolicySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = PrivacyPolicy.objects.all()