#!/bin/bash

# Clean the distribution
echo "Removing ./dist/*.[js|css|map]..."
rm -f ./dist/*.js
rm -f ./dist/*.css
rm -f ./dist/*.map

echo "Distribution cleaned."