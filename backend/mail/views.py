"""
mail views
"""
import json
from pathlib import Path
from email import message
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .mail_utils.view_helpers import _is_subset, _send_email

### Global Constants ###
BASE_DIR = Path(__file__).resolve().parent.parent
with open(str(BASE_DIR.parent.parent) + "/keys.json", "rb") as secret_keys:
    CONTACT_INFO = json.loads(secret_keys.read())['contact']

@api_view(['GET'])
def contact(request, *args, **kwargs) -> HttpResponse:
    """
    Contacts the MSA by email

    Inputs
       :param request: <HttpRequest> containing all relevant information for the email to be sent
    
    Output
       :returns: Status ... 
                        ... HTTP_200_OK if the email is delivered successfully
                        ... HTTP_403_FORIBIDDEN if the email couldn't be delivered
                        ... HTTP_412_PRECONDITION_FAILED If one or more of the request fields 
                                                         don't meet their precondition(s)
    """
    contact_fields = ["name", "email", "subject", "message"]
    user_status   = _is_subset(contact_fields, request.GET.keys())

    if user_status == status.HTTP_200_OK:
        name    = request.GET['name']
        email   = request.GET['email']
        subject = request.GET['subject']
        message = request.GET['message']

        reciepient_emails = []
        print(f"GET: {request.GET}")
        
        if 'reciepientEmails' in request.GET:
            reciepient_emails = [request.GET['reciepientEmails']]
            print(f"[contact] (reciepientEmails) >> {reciepient_emails}")
        else:
            # reciepient_emails = ["msa-ec-current@mit.edu"]
            reciepient_emails = ["azain@mit.edu", "mchnada@mit.edu"]
            if subject == "Giving Khutbah request": reciepient_emails += ["msa-ec-current@mit.edu"]
        
        if 'fromEmailConfirm' in request.GET:
            from_email = request.GET['fromEmailConfirm']
            from_email_confrim = request.GET['fromEmailConfirm']
        else:
            from_email = email
            from_email_confrim = "donoreply@msa.com"
       
        smtp_port = 587
        from_password = None
        smtp_server = "smtp.gmail.com"
        if from_email in CONTACT_INFO: 
            smtp_port = CONTACT_INFO[from_email]["smtpPort"]
            smtp_server = CONTACT_INFO[from_email]["smtpServer"]
            from_password = CONTACT_INFO[from_email]["password"]

        print(f"[contact] (from_email) >> {from_email}")
        print(f"[contact] (smtp_port) >> {smtp_port}")
        print(f"[contact] (smtp_server) >> {smtp_server}")

        reciepient_emails_confrim = [email]

        # message content
        subject = subject
        text_content = "Name:\t%s\nEmail:\t%s\nMessage:\n%s" % (name, email, message.replace("\\n", "\n"))
        text_content_confirm = "This is a confimration that your message has been sent. An administrator will get back to you soon!"
        
        html_content = ""
        html_content_confirm = ""

        user_status = _send_email(from_email, from_password, reciepient_emails, smtp_server, smtp_port, subject, text_content, html_content)
        user_status = _send_email(from_email_confrim, from_password, reciepient_emails_confrim, smtp_server, smtp_port, subject, text_content_confirm, html_content_confirm)

    return Response(status = user_status)