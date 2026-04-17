#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

if [ -f "$ENV_FILE" ]; then
  set -a
  source "$ENV_FILE"
  set +a
else
  read -p "Cloud Agent URL: " AGENT_URL
  if [ -z "$AGENT_URL" ]; then
    echo "Error: Cloud Agent URL is required"
    exit 1
  fi

  read -p "Cloud Agent API Key (optional): " APIKEY

  read -p "Mediator URL: " MEDIATOR_URL
  if [ -z "$MEDIATOR_URL" ]; then
    echo "Error: Mediator URL is required"
    exit 1
  fi
fi

echo "Building SDK"
# build sdk
yarn install
yarn build --no-tui

# trigger e2e tests
cd integration-tests/e2e-tests
npm ci
export AGENT_URL APIKEY MEDIATOR_URL && npm run test:sdk