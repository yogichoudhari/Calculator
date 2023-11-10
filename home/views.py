from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

# Create your views here.

def home(request):
    greetings = 'Django\'s Calculator'
    return render(request,'index.html',context={"greetings":greetings})

def calc(request):
    if request.method=='GET':
        num1 = float(request.GET.get('num1'))
        num2 = float(request.GET.get('num2'))
        op = request.GET.get('operator')
        string = ''
        print(op)
        if op=='+':
            result = num1+num2
        elif op=='-':
            result = num1-num2
        elif op=='*':
            result = num1*num2
        else:
            try:
                 result = num1/num2
            except ZeroDivisionError:
                result='can not divide by Zero'
        return JsonResponse({'result':result})