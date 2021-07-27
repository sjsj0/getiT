# from .models import Account
from django.http import HttpResponse
# from .serializers import AccountSerializer
# from rest_framework import viewsets
# from django.http import JsonResponse

# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

# # from django.views.decorators.csrf import csrf_exempt
# import json


def Index(request):
    return HttpResponse("It is working!!")


# # Model ViewSet
# class UserViewSet(viewsets.ModelViewSet):
#     queryset = Account.objects.all()
#     serializer_class = AccountSerializer

#     # --------permissions not restricted to this viewset as new user has to be created without token, implement this for other viewsets---------
#     # ---authentication implemented on this specific class, if dont want globally then comment it in settings.py file, now we have not used anything
#     # permission_classes = [IsAuthenticated]
#     # ---type of authentication used here is TokenAuthentication
#     # authentication_classes = (TokenAuthentication, )



from .models import Account
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user

