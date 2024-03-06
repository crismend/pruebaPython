from rest_framework import viewsets
from .serializer import InventarioSerializer
from .models import Inventario

# Create your views here.
class InventarioView(viewsets.ModelViewSet):
  serializer_class = InventarioSerializer
  queryset = Inventario.objects.all()