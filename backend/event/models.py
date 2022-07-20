"""
event models
"""
import uuid
from django.db import models

### Global Constants ###
alphabet_size = 26

class Event(models.Model):
    """
    AF(id) = an event created on start_date and set to delete on end_date

    Representation Invariant
      - inherits from models.Model
   
    Representation Exposure
      - inherits from models.Model
      - access allowed to all fields but they are all immutable
    """
    ##### Representation #####
    title = models.CharField(max_length=alphabet_size)
    location = models.CharField(max_length=alphabet_size)
    tickets = models.CharField(max_length=alphabet_size ** 2, default="", blank=True)
    description = models.CharField(max_length=alphabet_size ** 2, default="")
    end_date = models.DateTimeField(blank=True, null=True)
    start_date = models.DateTimeField(blank=True, null=True)
    creation_date = models.DateTimeField(auto_now=True)
    id = models.UUIDField(primary_key = True,  editable = False, unique = True, default = uuid.uuid4)

    def __str__(self) -> str:
        """ Override models.Model.__str__() """
        return f"{self.title}: {self.start_date} - {self.end_date} created {self.creation_date}"