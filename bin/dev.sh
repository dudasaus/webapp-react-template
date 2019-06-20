#!/bin/bash

# Start the development server

# Message of how to stop
echo -e "Run \"npm run stop-dev\" to stop development server\n\n"

# Webpack
echo "Starting webpack..."
./node_modules/.bin/webpack-dev-server &
echo $! > /tmp/webpack-dev-server.pid

# Scss
echo "Starting scss..."
./node_modules/.bin/sass --watch ./src/scss/style.scss:./dist/style.css &
echo $! > /tmp/sass.pid
