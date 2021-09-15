#!/bin/bash
if [ "$1" != "" ]; then
  FILE=".envrc.$1"
else
  FILE=".envrc.example"
fi

for x in `cat ${ENV_FILE:-./config/$FILE}`; do echo $x && export $x; done;
