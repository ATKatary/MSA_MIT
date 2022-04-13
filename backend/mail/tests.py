"""
mail tests
"""
import time
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .mail_utils.test_helpers import _read_email
from django.core.exceptions import ValidationError

##### Global Constants #####
url = {"contact" : reverse("contact")}

class MailTests(APITestCase):
    """
    Testing Strategy:
        Definitions

        Partition ... 
            ... on contact email (un)delivered
    """
    ##### Contact Tests #####
    def test_verify_valid(self):
        """ 
        Tests ... 
              ... on signup: valid request with complete fields, met preconditions, reachable and nonexisting email
              ... on verify: valid verification code 
        """
        email                = "jdummy7898@gmail.com"
        subject              = "testing"
        password             = "haoihhxsctaemsuf"
        smtp_server          = "imap.gmail.com"
        smtp_port            = 933
        mail_box             = "inbox"
        criteria             = '(SUBJECT "%s")' % subject
          
        request_1_data       = {"name" : "Ahmed Katary", "email" : "akatary@mit.edu", "subject" : subject, "message" : "Hello World"}
        response_1           = self.client.get(url['contact'], request_1_data)
        
        print("Sleeping for 15 seconds while verification email sends...")
        time.sleep(15)

        verification_message = _read_email(email, password, smtp_server, smtp_port, mail_box, criteria)
        print("Message %s" % verification_message[0])

        self.assertEqual(response_1.status_code, status.HTTP_200_OK)