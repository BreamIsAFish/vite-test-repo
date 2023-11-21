# a="A"
# b=$a-test
# echo $b
# A=$(aws ssm get-parameters --names "/dmind-prescreening/$ENVIRONMENT_NAME/feature-config" --output json --query Parameter.Value)

A=$(aws ssm get-parameter --name "/dmind-prescreening/main/feature-config" --query Parameter.Value)
# B='{ "Parameters": [ { "Name": "/dmind-prescreening/main/feature-config", "Type": "String", "Value": "{\"enable_frontend_result_polling\":true,\"allow_interview_method\":[\"Video\",\"Audio\",\"Text\"],\"pre_interview_recipient_info\":{\"age\":true,\"gender\":true,\"hospital_number\":true,\"academic_year\":false}}", "Version": 3, "LastModifiedDate": 1700558393.415, "ARN": "arn:aws:ssm:ap-southeast-1:564141170168:parameter/dmind-prescreening/main/feature-config", "DataType": "text" } ], "InvalidParameters": [] }'

# JQ=/usr/bin/jq
# curl -sLo $JQ https://stedolan.github.io/jq/download/linux64/jq && chmod +x $JQ
# ls -la $JQ


#!/bin/bash

# JSON string
# B='{ "Parameters": [ { "Name": "/dmind-prescreening/main/feature-config", "Type": "String", "Value": "{\"enable_frontend_result_polling\":true,\"allow_interview_method\":[\"Video\",\"Audio\",\"Text\"],\"pre_interview_recipient_info\":{\"age\":true,\"gender\":true,\"hospital_number\":true,\"academic_year\":false}}", "Version": 3, "LastModifiedDate": 1700558393.415, "ARN": "arn:aws:ssm:ap-southeast-1:564141170168:parameter/dmind-prescreening/main/feature-config", "DataType": "text" } ], "InvalidParameters": [] }'

# # Extract the Value field
# value=$(echo $B | grep -o '"Value": *"[^"]*' | sed 's/"Value": *"\(.*\)/\1/')

# echo "Extracted Value:"
# echo $value