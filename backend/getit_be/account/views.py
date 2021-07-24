from .models import Account
from django.http import HttpResponse
from .serializers import AccountSerializer
from rest_framework import viewsets
from django.http import JsonResponse

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# from django.views.decorators.csrf import csrf_exempt
import json


def Index(request):
    return HttpResponse("It is working!!")


# Model ViewSet
class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    # --------permissions not restricted to this viewset as new user has to be created without token, implement this for other viewsets---------
    # ---authentication implemented on this specific class, if dont want globally then comment it in settings.py file, now we have not used anything
    # permission_classes = [IsAuthenticated]
    # ---type of authentication used here is TokenAuthentication
    # authentication_classes = (TokenAuthentication, )


# @csrf_exempt
# def test_data(request, *args, **kwargs):
#     if request.method == 'GET':
#         return JsonResponse({'get': 33})

#     elif request.method == 'POST':
#         request_json = request.body.decode('utf-8')
#         json_data = json.loads(request_json)

#         print(json_data)
#         return JsonResponse({'articleId': 1})
