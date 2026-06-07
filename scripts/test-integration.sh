#!/usr/bin/env bash

set -euo pipefail

STAGE="${STAGE:-integration}"

echo "Deploying..."

npx sst deploy --stage "$STAGE"

API_URL=$(jq -r '.api' .sst/outputs.json)

if [ -z "$API_URL" ] || [ "$API_URL" = "null" ]; then
  echo "Failed to resolve API URL"
  exit 1
fi

echo "Testing against $API_URL"

TASK_API_URL="$API_URL" \
  npx vitest run tests/integration

echo "Cleaning up..."

npx sst remove --stage "$STAGE"