#!/bin/bash
#takes in a URL and sends get request to the URL
http_code=$(curl -s -o /dev/null -w "%{http_code}" "$1"); [ "$http_code" = "200" ] && curl -s "$1"
