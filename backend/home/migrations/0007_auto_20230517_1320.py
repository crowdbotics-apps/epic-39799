# Generated by Django 2.2.28 on 2023-05-17 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20230516_1559'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='acceptedPrivacyPolicy',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='acceptedTerms',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='player_friends', to='home.Player'),
        ),
        migrations.AddField(
            model_name='player',
            name='isBlocked',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='level',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='profilePicture',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='rank',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='player',
            name='username',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
