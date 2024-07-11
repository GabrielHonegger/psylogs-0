from rest_framework import serializers
from .models import Patient, User
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    # Define the confirm field, which is not part of the user model
    confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'confirm']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm']:
            raise serializers.ValidationError('As senhas são diferentes')
        
        validate_password(data['password'])

        return data
    
    def create(self, validated_data):
        validated_data.pop('confirm')
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

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