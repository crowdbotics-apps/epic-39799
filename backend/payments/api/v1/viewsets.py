from rest_framework import authentication
from payments.models import CreditCard,Payment
from .serializers import CreditCardSerializer,PaymentSerializer
from rest_framework import viewsets

class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Payment.objects.all()

class CreditCardViewSet(viewsets.ModelViewSet):
    serializer_class = CreditCardSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = CreditCard.objects.all()