from django.urls import path, include
from .views import Index
from .views import UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', Index),
    path('account/', include(router.urls)),
]
