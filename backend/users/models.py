from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(null=True,blank=True,max_length=255,)
    email = models.EmailField(null=True,blank=True,max_length=254,)
    friends = models.ManyToManyField("users.User",blank=True,related_name="user_friends",)
    profilePicture = models.URLField(null=True,blank=True,)
    rank = models.IntegerField(null=True,blank=True,)
    level = models.IntegerField(null=True,blank=True,)
    favoriteCharacters = models.ManyToManyField("home.Character",blank=True,related_name="user_favoriteCharacters",)
    acceptedTerms = models.BooleanField(null=True,blank=True,max_length=256,)
    acceptedPrivacyPolicy = models.BooleanField(null=True,blank=True,)
    blocked = models.BooleanField(null=True,blank=True,)
    subscription = models.ManyToManyField("subscription.Subscription",blank=True,related_name="user_subscription",)
    conversations = models.ManyToManyField("chat.Chat",blank=True,related_name="user_conversations",)
    notifications = models.ManyToManyField("notification.Notification",blank=True,related_name="user_notifications",)
    creditCards = models.ManyToManyField("payments.CreditCard",blank=True,related_name="user_creditCards",)
    payments = models.ManyToManyField("payments.Payment",blank=True,related_name="user_payments",)
    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
