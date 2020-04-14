from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from .sunnyAnswer import composit

# Create your views here.
@api_view(['POST'])
def answer_service(request):
		if request.method == 'POST':
				str = json.dumps(request.data)
				print(str[10:-2])
				answer = composit(str[10:-2])

				return Response({answer})
