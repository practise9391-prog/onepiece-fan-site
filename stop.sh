#!/bin/bash
# Stop script for One Piece Web Experience

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

if [ -f "$DIR/.server.pid" ]; then
  PID=$(cat "$DIR/.server.pid")
  if ps -p "$PID" > /dev/null 2>&1; then
    echo "Stopping One Piece server (PID: $PID)..."
    kill "$PID"
    sleep 1
  fi
  rm -f "$DIR/.server.pid"
fi

fuser -k 3000/tcp 2>/dev/null
echo "Server on port 3000 has been stopped."

