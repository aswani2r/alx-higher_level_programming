#!/usr/bin/bash
# this script takes URL and sends request to display the size in bytes
curl -sI "$1" | grep -i Content-Length | awk '{print $2}' | tr -d '\r'
