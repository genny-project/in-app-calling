#!/bin/bash

if [ -z "${1}" ]; then
   version="latest"
else
   version="${1}"
fi


docker push gennyproject/in-app-call-server:${version}
docker tag  gennyproject/in-app-call-server:${version} gennyproject/in-app-call-server:latest
docker push gennyproject/in-app-call-server:latest
