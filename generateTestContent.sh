#!/usr/bin/env bash

DECK_NAME=decks

rm -rf content/*
mkdir content/$DECK_NAME

START=1
END=4

for (( c=$START; c<=$END; c++ ))
do
  hugo new $DECK_NAME/test$c/index.md && mkdir content/$DECK_NAME/test$c/assets
  echo
done
