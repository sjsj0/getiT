from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from passlib.hash import pbkdf2_sha256


class MyAccountManager(BaseUserManager):
	def create_user(self, email, username, first_name, phone, password):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have a username')

		enc_pass = pbkdf2_sha256.encrypt(password, rounds=12000, salt_size=32)
		testPass = '12412342'
		user = self.model(
			email=self.normalize_email(email),
			username=username,
            first_name=first_name,
			phone=phone,
			password='testPass'
		)
		
		print('Hello User')
		user.set_password('testPass')
		user.save(using=self._db)
		return user

	def create_superuser(self, email, username, password, first_name, phone):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
			username=username,
            first_name=first_name,
			phone=phone,
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
	first_name = models.CharField(max_length=100,default="Happy")
	phone = models.CharField(max_length=10,default='')
	password = models.CharField(max_length=256)

	USERNAME_FIELD= 'email'
	REQUIRED_FIELDS= ['username']

	objects = MyAccountManager()

	def __str__(self):
		return self.email

	# For checking permissions. to keep it simple all admin have ALL permissons
	def has_perm(self, perm, obj=None):
		return self.is_admin

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
	def has_module_perms(self, app_label):
		return True
