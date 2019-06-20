#!/bin/bash

# Build the distribution

# Stop on errors
set -e

# Compile the TypeScript
echo "Compiling TypeScript with webpack..."
./node_modules/.bin/webpack --mode=production

# Compile the Sass
echo "Compiling Sass..."
./node_modules/.bin/sass ./src/scss/style.scss:./dist/style.css

echo "Build complete."