#!/bin/bash
find . -name \*.js -type f -exec rm -f {} \;
rm -rf node_modules
yarn install