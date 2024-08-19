from rest_framework import serializers
from .models import Collateral

class CollateralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collateral
        fields = '__all__'
