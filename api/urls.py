from django.urls import path
from .views import PatientListView, CreatePatientView, CheckAuthenticationView, register

urlpatterns = [
    path('patients', PatientListView.as_view()),
    path('create-patient', CreatePatientView.as_view()),
    path('check-authentication', CheckAuthenticationView.as_view()),
    path('register', register)
]

