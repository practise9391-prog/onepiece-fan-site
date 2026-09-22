#!/bin/bash
# Persistent Startup Script for One Piece Web Experience
# Runs independently in the background so it never stops when you close terminal or chat.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

# If production build doesn't exist, build it first
if [ ! -d "$DIR/dist" ]; then
  echo "Building production assets first..."
  npm run build
fi

# Stop any existing instance
if [ -f "$DIR/.server.pid" ]; then
  OLD_PID=$(cat "$DIR/.server.pid")
  if ps -p "$OLD_PID" > /dev/null 2>&1; then
    echo "Stopping previous server instance (PID: $OLD_PID)..."
    kill "$OLD_PID" 2>/dev/null
    sleep 1
  fi
  rm -f "$DIR/.server.pid"
fi

# Also ensure port 3000 is freed
fuser -k 3000/tcp 2>/dev/null

# Start server detached using nohup
nohup node server.js > server.log 2>&1 &
SERVER_PID=$!
echo $SERVER_PID > "$DIR/.server.pid"

LOCAL_IP=$(hostname -I | awk '{print $1}')
if [ -z "$LOCAL_IP" ]; then
  LOCAL_IP="192.168.0.25"
fi

echo "=========================================================="
echo "⚓ ONE PIECE WEBSITE IS NOW RUNNING PERMANENTLY!"
echo "=========================================================="
echo "• On this computer:   http://localhost:3000"
echo "• Anyone on Wi-Fi:    http://${LOCAL_IP}:3000"
echo "• Process ID (PID):   $SERVER_PID (Saved to .server.pid)"
echo "• Server Logs:        $DIR/server.log"
echo ""
echo "To stop the server anytime, run: ./stop.sh"
echo "=========================================================="

