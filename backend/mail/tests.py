"""
mail tests
"""
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.exceptions import ValidationError

##### Global Constants #####
url = {"contact" : reverse("contact")}

class MailTests(APITestCase):
    """
    Testing Strategy:
        Definitions

        Partition ... 
            ... on contact 
    """
    ##### Contact Tests #####