from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import LANGUAGE_SESSION_KEY

class MyAccountManager(BaseUserManager):
	def create_user(self, email, username, is_seller, first_name=None, last_name=None, phone=None, password=None):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have a username')

		user = self.model(
			email=self.normalize_email(email),
			username=username,
            first_name=first_name,
			last_name=last_name,
			phone=phone,
			is_seller = is_seller,
		)
		
		print('Hello User')
		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, username, password, is_seller, first_name=None, last_name=None, phone=None):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
			username=username,
            first_name=first_name,
			last_name=last_name,
			phone=phone,
			is_seller = is_seller,
		)
		user.is_admin = True
		user.is_staff = True
		user.is_superuser = True
		user.save(using=self._db)
		print('Hello SuperUser')
		return user


class Account(AbstractBaseUser):
	email = models.EmailField(verbose_name="email", max_length=60, unique=True)
	username = models.CharField(max_length=30, unique=True)
	date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
	last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
	is_admin = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	is_superuser = models.BooleanField(default=False)
	first_name = models.CharField(max_length=100,null=True)
	last_name = models.CharField(max_length=100,null=True)
	phone = models.CharField(max_length=10,null=True)
	is_seller = models.BooleanField(null=False)
	# password = models.CharField(max_length=256)

	USERNAME_FIELD= 'email'
	REQUIRED_FIELDS= ['username', 'first_name' , 'phone', 'last_name']

	objects = MyAccountManager()

	def __str__(self):
		return self.email

	# For checking permissions. to keep it simple all admin have ALL permissons
	def has_perm(self, perm, obj=None):
		return self.is_admin

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
	def has_module_perms(self, app_label):
		return True
