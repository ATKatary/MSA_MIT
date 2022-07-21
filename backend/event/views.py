"""
event views
"""
import json
import datetime
from pathlib import Path
from email import message
from .models import Event
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .event_utils.view_helpers import _is_subset

### Global Constants ###
all_ = "all"
date = lambda d: datetime.date(int(d[2]), int(d[0]), int(d[1]))

BASE_DIR = Path(__file__).resolve().parent.parent
with open(str(BASE_DIR.parent.parent) + "/keys.json", "r") as secret_keys:
    PASSWORD = json.loads(secret_keys.read())['msa']['event']

@api_view(['POST'])
def create(request, *args, **kwargs) -> HttpResponse:
    """
    Allows a MSA executive member to create and publish an event

    Inputs
       :param request: <HttpRequest> containing all relevant information for the event to be created
    
    Output
       :returns: Status ... 
                        ... HTTP_201_CREATED if the event is created successfully
                        ... HTTP_403_FORIBIDDEN if the event couldn't be created
                        ... HTTP_412_PRECONDITION_FAILED If one or more of the request fields 
                                                         don't meet their precondition(s)
    """
    create_fields = ["password", "title", "startDate", "endDate", "location", "tickets", "description"]
    event_status   = _is_subset(create_fields, request.data.keys())

    if event_status == status.HTTP_200_OK:
        if request['password'] != PASSWORD: return Response(status = status.HTTP_403_FORIBIDDEN)
        
        title = request['title']
        tickets = request['tickets']
        end_date = request['endDate']
        location = request['location']
        start_date = request['startDate']
        description = request['description']

        event = Event.objects.create(title=title, location=location, tickets=tickets, description=description, end_date=end_date, start_date=start_date)
        event.save()

    return Response(status = event_status)

@api_view(['GET'])
def fetch(request, *args, **kwargs) -> HttpResponse:
    """
    Fetches all available events within a selected date range

    Inputs
       :param request: <HttpRequest> containing all relevant information for the event to be fetched
    
    Output
       :returns: Status ... 
                        ... HTTP_201_CREATED if the events are fetched successfully
                        ... HTTP_403_FORIBIDDEN if the events couldn't be fetched
                        ... HTTP_412_PRECONDITION_FAILED If one or more of the request fields 
                                                         don't meet their precondition(s)
    """
    request = request.GET
    fetch_fields = ["startDate", "endDate"]
    event_status   = _is_subset(fetch_fields, request.keys())
    
    data = {}
    if event_status == status.HTTP_200_OK:
        end_date = request['endDate']
        start_date = request['startDate']
        
        events_to_fetch = []
        for event in Event.objects.filter(start_date__gte=start_date, end_date__lte=end_date):
            events_to_fetch.append({
                "name": event.title,
                "description": event.description,
                "location": event.location,
                "startDate": event.start_date,
                "endData": event.end_date
            })

        for event in Event.objects.filter(start_date=None):
            events_to_fetch.append({
                "name": event.title,
                "description": event.description,
                "location": event.location,
                "startDate": event.start_date,
                "endData": event.end_date
            })
        
        data['events'] = events_to_fetch
    
    return Response(status = event_status, data = data)

def _date_time(date, time):
    """
    Converts a date and time to a datetime object

    Inputs
        :date: <str> date in format mm-dd-yyyy
        :time: <str> time in format hh-mm-ss

    Outputs
        :returns: <datetime> object for date and time
    """
    date = date.split("-")
    time = time.split("-")

    return datetime(int(date[2]), int(date[0]), int(date[1]), int(time[0]), int(time[1]), int(time[2]), 0)

