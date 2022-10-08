# Generated by Django 3.1.7 on 2021-07-28 18:03

from django.db import migrations, models
import product.models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='default.jpg', upload_to=product.models.upload_path),
        ),
    ]