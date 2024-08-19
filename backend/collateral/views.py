from rest_framework import viewsets
from .models import Collateral
from .serializers import CollateralSerializer

class CollateralViewSet(viewsets.ModelViewSet):
    queryset = Collateral.objects.all()
    serializer_class = CollateralSerializer
