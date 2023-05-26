from app_sph_lms.api.serializer.course_serializer import (
    CourseCategorySerializer, CourseSerializer)
from app_sph_lms.models import Category, Course, CourseCategory
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 12

    def get_paginated_response(self, data):
        return Response({
            'page_size': self.page_size,
            'count': self.page.paginator.count,
            'totalPages': self.page.paginator.num_pages,
            'current_page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })


class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = LargeResultsSetPagination

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        course_id = response.data.get('id')

        for category in request.data['category'].split(','):
            CourseCategory.objects.create(
                course=Course.objects.get(id=course_id),
                category=Category.objects.get(id=category)
            )
        return response


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer


class CourseCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
