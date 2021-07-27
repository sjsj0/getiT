from django.urls import path, include
# from .views import Index, UserViewSet
from .views import Index

from rest_framework.routers import DefaultRouter
from django.conf.urls import url

from .views import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

# router = DefaultRouter()
# # router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', Index),
    # path('account/', include(router.urls)),

    path('api/auth', include('knox.urls')),
    path('account/register/', RegisterAPI.as_view()),
    path('account/login/', LoginAPI.as_view()),
    path('account/user/', UserAPI.as_view()),
    path('account/logout/', knox_views.LogoutView.as_view(), name='knox_logout')
]
