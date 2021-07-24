from django.db import models
from account.models import Account

# Create your models here.
class Product(models.Model):
    seller = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=False)
    about = models.TextField(max_length=256, null=False, default="Sample Product")
    description = models.TextField(max_length=1024, null=False, default="Description of Product")
    quantity = models.PositiveIntegerField(default=1, null=False)
    price = models.IntegerField(default=100, null=False)
    date_added = models.DateTimeField(verbose_name='date added', auto_now_add=True)
    image = models.ImageField(blank=True, default='default.jpg')

    def __str__(self):
        return self.title