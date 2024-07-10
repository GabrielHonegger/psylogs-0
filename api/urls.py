from django.urls import path
from .views import PatientListView, CreatePatientView

urlpatterns = [
    path('patients', PatientListView.as_view()),
    path('create-patient', CreatePatientView.as_view())
]

