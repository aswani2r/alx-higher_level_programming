#!/bin/bash
# this script takesi URL and sends request to display the size in bytes
curl -sI "$1" | grep -i "Content_Length" | awk '{print$2}' 
