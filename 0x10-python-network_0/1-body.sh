#!/bin/bash
#takes in a URL and sends get request to the URL
http_code=$(curl -s -o /dev/null -w "%{http_code}" "$1"); if [ "$http_code" = "200" ]; then curl -s "$1"; fi
