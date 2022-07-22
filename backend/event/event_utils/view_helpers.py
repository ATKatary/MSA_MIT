"""
view helpers 
"""
from rest_framework import status
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