from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
import json


# Create your views here.
@api_view(['GET'])
def answer_service(request):
		if request.method == 'GET':
				str = json.dumps(request.data)
				print(str[10:-2])

				return Response({"d"})
