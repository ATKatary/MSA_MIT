"""
backend url configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('mail/', include('mail.urls')),
    path('event/', include('event.urls'))
]
