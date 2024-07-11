from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')