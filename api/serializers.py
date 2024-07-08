from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

# To handle the POST request
class CreatePatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('nome', 'idade', 'sexo', 'nucleos', 
                  'religiao', 'escolaridade', 'trabalho')