from rest_framework import viewsets
from .serializer import OrdenSerializer
from .models import Orden

# Create your views here.
class OrdenView(viewsets.ModelViewSet):
  serializer_class = OrdenSerializer
  queryset = Orden.objects.all()