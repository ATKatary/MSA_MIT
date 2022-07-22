"""
test helpers
"""
import time, email, imaplib, smtpd, traceback
from django.core.exceptions import ValidationError

##### Classes #####
class Message():
    """
    AF(subject, reciever, sender, date, content) = email sent from sender to reciever on date with content and subject
    
    Represnetation Invariant
        - true

    Representation Exposure
        - all fields are exposed and immutable
    """

    ##### Representation #####
    def __init__(self, subject, receiver, sender, date, content):
        self.subject  = subject
        self.receiver = receiver
        self.sender   = sender
        self.date     = date
        self.content  = content

    def __str__(self):
        """ Override Objects.str """
        return """
               -----------------------------------------
               Receiver : %s\n
               Sender   : %s\n
               Date     : %s\n
               Subject  : %s\n
               -----------------------------------------
               Content  : \n
               %s
               """ % (self.receiver, self.sender, self.date, self.subject, self.content)

##### Functions #####
def _read_email(from_email, from_password, smtp_server, smtp_port, mail_box, criteria = ''):
    """
    Returns email(s) with given subject from the given email

    Inputs
        :param from_email: <str> of sender's email
        :param from_password: <str> of sender's password
        :param smtp_server: <str> of email host's smtp server
        :param smtp_port: <str>  port to connect to (usually 993)
        :param mail_box: <str> one of {'inbox', 'spam', 'trash', 'archive'}
        :param criteria: optional <str> specifying which message(s) to look for
    
    Outputs
        :returns: <list> of found message(s) matching criteria as Message Objects
        :raises: <ValidationError> if the email can't be accessed or read
    """
    try:
        mail = imaplib.IMAP4_SSL(smtp_server)
        mail.login(from_email, from_password)
        mail.select(mail_box)

        selected_mail = mail.search(None, criteria)[1][0].split()
        messages      = []
        print("There are %d message(s) with criteria: %s" % (len(selected_mail), criteria))

        for mail_id in selected_mail:
            data          = mail.fetch(mail_id, '(RFC822)')
            bytes_data    = data[1][0][1]
            email_message = email.message_from_bytes(bytes_data)

            receiver      = email_message['to']
            sender        = email_message['from']
            date          = email_message['date']
            subject       = email_message['subject']
            content       = ""

            for part in email_message.walk():
                part_type = part.get_content_type()
                if part_type in {"text/plain", "text/html"}:
                    part     = part.get_payload(decode = True)
                    content += part.decode() + "\n"
            
            message = Message(subject, receiver, sender, date, content)
            messages.append(message)

        return messages
    except imaplib.IMAP4.error as error:
        print("Error: %s" % error)
        raise ValidationError("Invalid Email")