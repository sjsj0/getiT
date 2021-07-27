from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from product.models import Product

# Register your models here.
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('seller', 'title', 'date_added',
#                     'about', 'description', 'quantity', 'price')
#     search_fields = ('seller', 'title',)
#     readonly_fields = ('date_joined',)

#     filter_horizontal = ()
#     list_filter = ()
#     fieldsets = ()


# admin.site.register(Product, ProductAdmin)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['seller', 'title', 'category', 'date_added',
                    'about', 'description', 'quantity', 'price']
    search_fields = ('seller', 'title',)
    readonly_fields = ['date_added',]
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()