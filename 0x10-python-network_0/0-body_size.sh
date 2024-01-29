#!/usr/bin/bash
# this script takesi URL and sends request to display the size in bytes
curl -s "$1" --write-out "size: %{size_download}\n" -o /dev/null
