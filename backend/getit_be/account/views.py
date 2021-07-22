from .models import Account
from django.http import HttpResponse
from .serializers import AccountSerializer
from rest_framework import viewsets

def Index(request):
    return HttpResponse("It is working!!")

# Model ViewSet
class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    
