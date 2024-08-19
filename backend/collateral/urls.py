from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CollateralViewSet

router = DefaultRouter()
router.register(r'collateral', CollateralViewSet, basename='collateral')

urlpatterns = [
    path('', include(router.urls)),
]