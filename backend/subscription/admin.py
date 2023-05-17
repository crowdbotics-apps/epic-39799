from django.contrib import admin
from .models import Subscription,SubscriptionFeature,SubscriptionPlan
admin.site.register(Subscription)
admin.site.register(SubscriptionPlan)
admin.site.register(SubscriptionFeature)

# Register your models here.
