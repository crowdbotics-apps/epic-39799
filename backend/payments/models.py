from django.conf import settings
from django.db import models
class Payment(models.Model):
    'Generated Model'
    paymentDatetime = models.DateTimeField()
    subscription = models.ManyToManyField("subscription.Subscription",related_name="payment_subscription",)
    creditCard = models.ManyToManyField("payments.CreditCard",related_name="payment_creditCard",)
    status = models.CharField(max_length=256,)
class CreditCard(models.Model):
    'Generated Model'
    holderName = models.CharField(max_length=256,)
    number = models.CharField(max_length=256,)
    cvv = models.IntegerField()
    expiration = models.CharField(max_length=256,)

# Create your models here.
