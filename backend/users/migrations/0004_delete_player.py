# Generated by Django 2.2.28 on 2023-05-16 15:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_player'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Player',
        ),
    ]
