# Generated by Django 5.0.6 on 2024-06-13 16:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_deliveryaddress_postalcode'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deliveryaddress',
            name='phoneNumber',
        ),
        migrations.RemoveField(
            model_name='deliveryaddress',
            name='postalCode',
        ),
    ]
