#!/bin/bash
# Push script to publish code to your GitHub account for 24/7 GitHub Pages Hosting

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

echo "=========================================================="
echo "⚓ ONE PIECE FAN SITE — PUSH TO GITHUB & 24/7 LIVE HOSTING"
echo "=========================================================="
echo ""
echo "Detected GitHub Username: PavanKumar-Tech9391 (practise9391@gmail.com)"
echo ""
echo "Step 1: Make sure the repository exists on GitHub:"
echo "  👉 Open in your browser: https://github.com/new"
echo "  👉 Repository Name: onepiece-fan-site"
echo "  👉 Visibility: Public"
echo "  👉 Click 'Create repository' (Do not add README/license)"
echo ""
echo "Step 2: Authentication Option:"
echo "  If you have a GitHub Personal Access Token (classic with repo scope):"
echo "  You can paste your token directly, or your repo URL."
echo "  (To create a token: https://github.com/settings/tokens -> Generate new token -> select 'repo')"
echo "=========================================================="
echo ""

if [ -n "$1" ]; then
  INPUT="$1"
else
  read -p "Paste your Repository URL or GitHub Personal Access Token: " INPUT
fi

if [ -z "$INPUT" ]; then
  echo "❌ Error: No input provided."
  exit 1
fi

# Check if input is a token (starts with ghp_ or 40-character hex) or full URL
if [[ "$INPUT" =~ ^ghp_ ]] || [[ ${#INPUT} -ge 35 && ! "$INPUT" =~ ^https?:// ]]; then
  echo "🔑 Personal Access Token detected! Configuring remote with token..."
  REPO_URL="https://${INPUT}@github.com/PavanKumar-Tech9391/onepiece-fan-site.git"
elif [[ "$INPUT" =~ ^https://github.com ]]; then
  REPO_URL="$INPUT"
else
  REPO_URL="https://github.com/PavanKumar-Tech9391/$INPUT.git"
fi

echo "Setting remote origin to: ${REPO_URL%%@*}@github.com/..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
git branch -M main

echo "Pushing code to GitHub main branch..."
if git push -u origin main; then
  echo ""
  echo "=========================================================="
  echo "🎉 SUCCESS! Your code has been pushed to GitHub!"
  echo "=========================================================="
  echo ""
  echo "NEXT (AND FINAL) STEP TO ACTIVATE 24/7 LIVE WEBSITE:"
  echo "1. Go to: https://github.com/PavanKumar-Tech9391/onepiece-fan-site/settings/pages"
  echo "2. Under 'Build and deployment' -> 'Source':"
  echo "   Change 'Deploy from a branch' to 👉 'GitHub Actions'"
  echo ""
  echo "✨ Once selected, your site will deploy automatically within 60 seconds at:"
  echo "👉 https://PavanKumar-Tech9391.github.io/onepiece-fan-site/"
  echo ""
  echo "🌍 This link will work 24/7 on any mobile phone, tablet, or PC worldwide"
  echo "   even if your laptop is powered off and Wi-Fi is disconnected!"
  echo "=========================================================="
else
  echo ""
  echo "⚠️ Push failed. Please verify that:"
  echo "1. The repository 'onepiece-fan-site' was created at https://github.com/new"
  echo "2. You entered the correct GitHub credentials or Personal Access Token"
fi
