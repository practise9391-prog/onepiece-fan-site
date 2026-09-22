#!/bin/bash
# Push script to publish code to your GitHub account

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

echo "=========================================================="
echo "⚓ PUSH TO GITHUB (AUTOMATIC 24/7 GITHUB PAGES HOSTING)"
echo "=========================================================="
echo ""
echo "If you haven't created a GitHub repository yet:"
echo "1. Go to: https://github.com/new"
echo "2. Name it: onepiece-fan-site (Public)"
echo "3. Copy your repository URL (e.g. https://github.com/YOUR_USERNAME/onepiece-fan-site.git)"
echo ""

if [ -z "$1" ]; then
  read -p "Paste your GitHub Repository URL: " REPO_URL
else
  REPO_URL="$1"
fi

if [ -z "$REPO_URL" ]; then
  echo "Error: No repository URL provided."
  exit 1
fi

git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
git branch -M main

echo "Pushing code to GitHub..."
git push -u origin main

echo ""
echo "=========================================================="
echo "✅ Code pushed to GitHub successfully!"
echo "• Your automated GitHub Actions workflow will build and deploy"
echo "  the site automatically to GitHub Pages."
echo "• In your GitHub repo settings, go to: Settings -> Pages"
echo "  Source: GitHub Actions"
echo "• The website will now stay LIVE 24/7 on any phone or PC"
echo "  even when your laptop is turned completely off!"
echo "=========================================================="
