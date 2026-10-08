#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-demo-app}"
APP_REPO="${APP_REPO:-https://github.com/vanshika-nahar/nextjs-demo-app.git}"
APP_PORT="${APP_PORT:-3000}"

if [ ! -d "$APP_DIR/.git" ]; then
  rm -rf "$APP_DIR"
  git clone --depth 1 "$APP_REPO" "$APP_DIR"
fi

cd "$APP_DIR"
if [ ! -d node_modules ]; then
  npm ci
fi
npm run build
nohup npm start > app.log 2>&1 &
cd ..

npx wait-on "http://localhost:${APP_PORT}"
echo "Demo app is up on http://localhost:${APP_PORT}"
