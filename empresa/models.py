from django.db import models

# Create your models here.
class Empresa(models.Model):
  nit = models.CharField(primary_key=True, max_length=20)
  nombre = models.CharField(max_length=100)
  direccion = models.TextField()
  telefono = models.CharField(max_length=15)

  def __str__(self):
    return self.nombre