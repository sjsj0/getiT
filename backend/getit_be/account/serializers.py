from rest_framework import serializers
from .models import Account
from rest_framework.authtoken.views import Token

class AccountSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        min_length=5, write_only=True, required=True)

    class Meta:
        model = Account
        fields = (
            'id', 'email', 'username', 'date_joined',
            'last_login', 'first_name', 'last_name', 'phone', 'password', 'is_seller')

    def create(self, validated_data):
        newuser = Account.objects.create_user(**validated_data)
        Token.objects.create(user=newuser)                         # this creates Token for every user
        return newuser
