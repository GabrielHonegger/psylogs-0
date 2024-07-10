from rest_framework import status
from .models import Patient
from .serializers import PatientSerializer, CreatePatientSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

class PatientListView(ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class CreatePatientView(APIView):
    serializer_class= CreatePatientSerializer

    def post(self, request):
        # Check if the user currently has an active session with our web server
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        # This will take all of our data and it will serialize it and give us some python representation of it
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            nome = serializer.data.get('nome')
            idade = serializer.data.get('idade')
            sexo = serializer.data.get('sexo')
            nucleos = serializer.data.get('nucleos')
            religiao = serializer.data.get('religiao')
            escolaridade = serializer.data.get('escolaridade')
            trabalho = serializer.data.get('trabalho')

            # Create new patient
            patient = Patient(nome=nome, idade=idade, sexo=sexo, nucleos=nucleos,
                              religiao=religiao, escolaridade=escolaridade, trabalho=trabalho)
            patient.save()

            return Response(PatientSerializer(patient).data, status=status.HTTP_201_CREATED) 
        return Response({"detail": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)
