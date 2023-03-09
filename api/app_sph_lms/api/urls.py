from django.urls import path, include
from app_sph_lms.api.views import (
    CourseList, 
    CourseDetail, 
    CourseCategoryList, 
    CourseCategoryDetail
)

urlpatterns = [
    path('course/', CourseList.as_view(), name="course-list"),
    path('course/<int:id>', CourseDetail.as_view(), name="course-detail"),
    path('course-category/', CourseCategoryList.as_view(), name="course-category-list"),
    path('course-category/<int:id>', CourseCategoryDetail.as_view(), name="course-category-detail"),
]
