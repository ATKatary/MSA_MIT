"""
mail views
"""
from email import message
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from mail_utils.view_helpers import _is_subset, _send_email

@api_view(['POST'])
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
    contact_fields = ["name", "kerb", "message"]
    user_status   = _is_subset(contact_fields, request.data.keys())

    if user_status == status.HTTP_200_OK:
        name    = request.data['name']
        kerb    = request.data['kerb']
        message = request.data['message']
    
        # sender and reciepient information
        from_email        = "%s@mit.edu" % kerb
        from_password     = None
        reciepient_emails = [from_email, ""]
        # server and port sending the message
        smtp_server       = None 
        smtp_port         = None
        # message content
        subject           = "Account verification code"
        text_content      = message
        html_content      = ""

        return _send_email(from_email, from_password, reciepient_emails, smtp_server, smtp_port, subject, text_content, html_content)

    return Response(status = user_status)