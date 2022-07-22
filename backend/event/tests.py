"""
event tests
"""
import time
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.exceptions import ValidationError

##### Global Constants #####
url = {"create" : reverse("create")}

class MailTests(APITestCase):
    """
    Testing Strategy:
        Definitions

        Partition ... 
            ... on create (un)created
    """
    ##### Create Tests #####
