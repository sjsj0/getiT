from django.urls import path, include
from .views import Index, UserViewSet
from rest_framework.routers import DefaultRouter
from django.conf.urls import url

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', Index),
    path('account/', include(router.urls)),
]
