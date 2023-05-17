from rest_framework import serializers
from payments.models import CreditCard,Payment

class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = "__all__"

class CreditCardSerializer(serializers.ModelSerializer):

    class Meta:
        model = CreditCard
        fields = "__all__"