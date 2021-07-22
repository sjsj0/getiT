from rest_framework import serializers
from .models import Account
# # from django.contrib.auth.models import User


class AccountSerializer(serializers.ModelSerializer):

     class Meta:
        model = Account
        fields = ['email', 'username', 'date_joined',
                  'last_login', 'first_name', 'phone', 'password' ]
