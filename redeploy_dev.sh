#!/bin/bash

# Load NVM and set Node version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "🔁 Pulling latest code..."
git pull origin banh

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🚀 Installing PM2 globally if needed..."
npm list -g pm2 || npm install -g pm2

echo "🚀 Restarting app with PM2..."
pm2 restart clone-solscan || pm2 start ecosystem.config.jsecho "🔁 Pulling latest code..."
git pull origin banh

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart solscan-v1 || pm2 start ecosystem.config.js
