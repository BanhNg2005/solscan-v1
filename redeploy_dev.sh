#!/bin/bash

echo "🔁 Pulling latest code..."
git pull origin banh

echo "📦 Installing dependencies..."
npm ci

echo "🏗️ Building app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart solscan || pm2 start npm --name solscan -- start
