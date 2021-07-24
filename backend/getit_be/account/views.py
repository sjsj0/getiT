from .models import Account
from django.http import HttpResponse
from .serializers import AccountSerializer
from rest_framework import viewsets
from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
import json


def Index(request):
    return HttpResponse("It is working!!")


# Model ViewSet
class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


# @csrf_exempt
# def test_data(request, *args, **kwargs):
#     if request.method == 'GET':
#         return JsonResponse({'get': 33})

#     elif request.method == 'POST':
#         request_json = request.body.decode('utf-8')
#         json_data = json.loads(request_json)

#         print(json_data)
#         return JsonResponse({'articleId': 1})
