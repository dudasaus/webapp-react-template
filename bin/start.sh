#!/bin/bash

# Clean, build, and start the server

# Clean the distribution
./bin/clean.sh

# Build the distribution
./bin/build.sh

# Start the server
echo "Starting server..."
node server.js