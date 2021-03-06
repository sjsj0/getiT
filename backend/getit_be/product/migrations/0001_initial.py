# Generated by Django 3.1.7 on 2021-07-24 19:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('about', models.TextField(default='Sample Product', max_length=256)),
                ('description', models.TextField(default='Description of Product', max_length=1024)),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('price', models.IntegerField(default=100)),
                ('date_added', models.DateTimeField(auto_now_add=True, verbose_name='date added')),
                ('image', models.ImageField(blank=True, default='default.jpg', upload_to='')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
