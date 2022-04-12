"""
view helpers 
"""
import smtplib, ssl
from rest_framework import status
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.core.exceptions import ValidationError

##### Functions #####
def _is_subset(required_fields, request_fields) -> status:
    """
    Checks that the required fields are a subset of the request fields

    Definitions
        subset
            a sequence of objects contained within another sequence 

            A = {1, 2, 3} is a subset of B = {1, 2, 3, 4, 5}

    Inputs
        :param required_fields: <list> of strings representing fields required
        :param request_fields: <view> of strings representing fields sent by the request 

    Outputs
        :returns: Status ...
                         ... HTTP_200_OK if the required fields are a subset of the request fields
                         ... HTTP_400_BAD_REQUEST if the required fields are not a subset of the request fields
    """
    for field in required_fields:
        if field not in request_fields: 
            return status.HTTP_400_BAD_REQUEST
    return status.HTTP_200_OK

def _send_email(from_email, from_password, reciepient_emails, smtp_server, smtp_port, subject, text_content, html_content) -> status:
    """
    Sends an email message from the sender's email to the reciever's email 

    Inputs
        :param from_email: <str> of sender's email
        :param from_password: <str> of sender's password
        :param reciepient_emails: <list> of reciever emails
        :param smtp_server: <str> of email host's smtp server
        :param smtp_port: <str>  port to connect to (usually 993)
        :param subject: <str> describing the message to be sent
        :param text_content: <str> detailing the message's text content to send 
        :param html_content: <str> detailing the message's html content to send 
    """
    try:
        server = smtplib.SMTP("localhost")
        if from_password is not None:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port, context = ssl.create_default_context())
            server.login(from_email, from_password)
            print("Successfully logged in ...")

        for receiver_email in reciepient_emails:
            print("Sending to %s" % receiver_email)
            message            = MIMEMultipart("alternative")
            message["Subject"] = subject
            message["From"]    = from_email
            message["To"]      = receiver_email
            part_1             = MIMEText(text_content, "plain")
            part_2             = MIMEText(html_content, "html")

            message.attach(part_1)
            server.sendmail(from_email, receiver_email, message.as_string())

    except Exception as error:
        print("Error: %s" % error)
        return status.HTTP_403_FORBIDDEN

    finally:
        server.quit() 
        return status.HTTP_200_OK