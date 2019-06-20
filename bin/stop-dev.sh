#!/bin/bash

# Stop the development server

# Webpack
echo "Killing webpack..."
kill -9 $(cat /tmp/webpack-dev-server.pid)

# Scss
echo "Killing scss..."
kill -9 $(cat /tmp/sass.pid)

# Clean
./bin/clean.sh

echo "Development server stopped."
