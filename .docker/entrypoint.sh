#!/bin/bash
set -e

# Navigate to the application directory
cd /app

# Install dependencies using Yarn
yarn install

# Initialize Git repository if not present
if [ ! -d ".git" ]; then
    git init
fi

# Run the build script
yarn build