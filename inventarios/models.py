from django.db import models
from productos.models import Producto
from empresa.models import Empresa


class Inventario(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Inventario - {self.empresa} - {self.producto}"
