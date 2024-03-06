from django.urls import path, include
# from rest_framework.documentation import include_docs_urls
from rest_framework import routers   #toma las vista y genera urls
from ordenes import views

#api versioning  
router = routers.DefaultRouter()
router.register(r'ordenes', views.OrdenView, 'ordenes')

urlpatterns = [
  path("api/v1/", include(router.urls)),
  # path('docs', include_docs_urls(title="taskd API"))
]