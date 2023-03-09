from rest_framework.response import Response
from app_sph_lms.models import Course, CourseCategory
from app_sph_lms.api.serializers import CourseSerializer, CourseCategorySerializer
from rest_framework import generics


# Create your views here.

class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    
class CourseCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
       
