#!/bin/bash

# Load NVM - try multiple methods
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "🔧 Loading NVM from $HOME/.nvm/nvm.sh"
    source "$HOME/.nvm/nvm.sh"
elif [ -f "/home/banh/.nvm/nvm.sh" ]; then
    echo "🔧 Loading NVM from /home/banh/.nvm/nvm.sh"
    source "/home/banh/.nvm/nvm.sh"
else
    echo "❌ NVM not found, trying to use system node"
fi

# Check if node is available
if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js version: $(node --version)"
    echo "✅ NPM version: $(npm --version)"
else
    echo "❌ Node.js not found!"
    exit 1
fi

echo "🔁 Pulling latest code..."
git pull origin banh

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart solscan-v1 || pm2 start ecosystem.config.js
