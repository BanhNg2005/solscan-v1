#!/bin/bash

echo "🔁 Pulling latest code..."
git pull origin dev-2

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart solscan-v1 || pm2 start ecosystem.config.js
