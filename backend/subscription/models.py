from django.conf import settings
from django.db import models
class Subscription(models.Model):
    'Generated Model'
    plan = models.ManyToManyField("subscription.SubscriptionPlan",related_name="subscription_plan",)
    expiration = models.DateField(null=True,blank=True,)
class SubscriptionPlan(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    price = models.DecimalField(null=True,blank=True,max_digits=30,decimal_places=10,)
    type = models.CharField(null=True,blank=True,max_length=256,)
    features = models.ManyToManyField("subscription.SubscriptionFeature",blank=True,related_name="subscriptionplan_features",)
class SubscriptionFeature(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)

# Create your models here.
