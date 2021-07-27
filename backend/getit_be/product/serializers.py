from rest_framework import serializers
from .models import Product
from rest_framework.authtoken.views import Token

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'seller', 'title', 'category', 'date_added',
                    'about', 'description', 'quantity', 'price', 'image']