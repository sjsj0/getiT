from django.urls import path, include
from .views import ProductViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls import url

router = DefaultRouter()
router.register('', ProductViewSet, basename='products')

urlpatterns = [
    path('', include(router.urls)),
]
