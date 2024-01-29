#!/usr/bin/bash
# this script takesi URL and sends request to display the size in bytes
curl -s "$1" | wc -c
