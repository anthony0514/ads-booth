#!/bin/bash
set -e

PORT=8000
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
URL="http://localhost:${PORT}"

cd "$DIR"
python3 -m http.server "$PORT" >/tmp/ads-booth-server.log 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null' EXIT

sleep 1

open "$URL"

wait $SERVER_PID
