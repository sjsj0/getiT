from rest_framework import serializers
from .models import Account

class AccountSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        min_length=5, write_only=True, required=True)

    class Meta:
        model = Account
        fields = (
            'email', 'username', 'date_joined',
            'last_login', 'first_name', 'last_name', 'phone', 'password')

    def create(self, validated_data):
        return Account.objects.create_user(**validated_data)
