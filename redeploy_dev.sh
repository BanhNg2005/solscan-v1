#!/bin/bash

# Load NVM to ensure Node/NPM are available
echo "� Loading NVM..."
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
elif [ -s "/home/banh/.nvm/nvm.sh" ]; then
    source "/home/banh/.nvm/nvm.sh"
else
    echo "❌ NVM not found"
    exit 1
fi

echo "✅ Node version: $(node --version)"
echo "✅ NPM version: $(npm --version)"

echo "�🔁 Pulling latest code..."
git pull origin banh

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🚀 Installing PM2 globally if needed..."
npm list -g pm2 >/dev/null 2>&1 || npm install -g pm2

echo "🚀 Restarting app with PM2..."
pm2 restart solscan-v1 || pm2 start ecosystem.config.js --name solscan-v1

echo "✅ Deployment completed!"
