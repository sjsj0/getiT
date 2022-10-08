from django.shortcuts import render
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class ProductViewSet(APIView):
    # queryset = Product.objects.all()
    # serializer_class = ProductSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Product.objects.all()
        serializer = ProductSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = ProductSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def post(self, request, *args, **kwargs):
    #     uploaded_image = request.data['image']
    #     print(uploaded_image)
    #     return {'message': 'Book created'}
