from django.urls import path
from .views import PatientView, CreatePatientView

urlpatterns = [
    path('patients', PatientView.as_view()),
    path('create-patient', CreatePatientView.as_view())
]

