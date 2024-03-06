from django.db import models
from empresa.models import Empresa
from categorias.models import Categoria

# Create your models here.
class Producto(models.Model):
  codigo = models.CharField(max_length=20)
  nombre = models.CharField(max_length=100)
  caracteristicas = models.TextField()
  precio = models.DecimalField(max_digits=10, decimal_places=2)
  empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
  categorias = models.ManyToManyField(Categoria)

  def __str__(self):
    return self.nombre