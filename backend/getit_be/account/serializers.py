from rest_framework import serializers
from .models import Account
from rest_framework.authtoken.views import Token

from django.contrib.auth import authenticate

# class AccountSerializer(serializers.ModelSerializer):

#     password = serializers.CharField(
#         min_length=5, write_only=True, required=True)

#     class Meta:
#         model = Account
#         fields = (
#             'id', 'email', 'username', 'date_joined',
#             'last_login', 'first_name', 'last_name', 'phone', 'password', 'is_seller')

#     def create(self, validated_data):
#         newuser = Account.objects.create_user(**validated_data)
#         Token.objects.create(user=newuser)                         # this creates Token for every user
#         return newuser



# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Account
    fields = ('id', 'username', 'email', 'is_seller')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = Account
    fields = ('id', 'username','email', 'is_seller', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = Account.objects.create_user(**validated_data)
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")