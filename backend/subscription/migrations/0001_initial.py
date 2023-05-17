# Generated by Django 2.2.28 on 2023-05-17 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SubscriptionFeature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='SubscriptionPlan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('price', models.DecimalField(blank=True, decimal_places=10, max_digits=30, null=True)),
                ('type', models.CharField(blank=True, max_length=256, null=True)),
                ('features', models.ManyToManyField(blank=True, related_name='subscriptionplan_features', to='subscription.SubscriptionFeature')),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expiration', models.DateField(blank=True, null=True)),
                ('plan', models.ManyToManyField(related_name='subscription_plan', to='subscription.SubscriptionPlan')),
            ],
        ),
    ]
