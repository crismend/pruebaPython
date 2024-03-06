from rest_framework import viewsets
from .serializer import CategoriaSerializer
from .models import Categoria

# Create your views here.
class CategoriaView(viewsets.ModelViewSet):
  serializer_class = CategoriaSerializer
  queryset = Categoria.objects.all()
