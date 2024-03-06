from django.db import models
from productos.models import Producto
from clientes.models import Cliente

class Orden(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    productos = models.ManyToManyField(Producto)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Orden #{self.id} - Cliente: {self.cliente.nombre}"
