#!/bin/bash
#takes in a URL as an argument, sends a GET request to the URL
curl -sH "X_School-User-Id: 98" "$1"
