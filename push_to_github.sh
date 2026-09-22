#!/bin/bash
# Push script to publish code to your GitHub account (practise9391-prog) for 24/7 GitHub Pages Hosting

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

GITHUB_USER="practise9391-prog"
REPO_NAME="onepiece-fan-site"

echo "=========================================================="
echo "⚓ ONE PIECE FAN SITE — PUSH TO GITHUB & 24/7 LIVE HOSTING"
echo "=========================================================="
echo "Account: $GITHUB_USER"
echo ""

if [ -n "$1" ]; then
  INPUT="$1"
else
  echo "Enter one of the following:"
  echo "1. Your GitHub Personal Access Token (starts with ghp_...)"
  echo "   (Generate in 20 sec at: https://github.com/settings/tokens/new with 'repo' scope)"
  echo "2. OR press ENTER to push using standard git credentials:"
  read -p "Token or URL [press ENTER to use standard push]: " INPUT
fi

if [[ "$INPUT" =~ ^ghp_ ]] || [[ ${#INPUT} -ge 35 && ! "$INPUT" =~ ^https?:// ]]; then
  echo "🔑 Personal Access Token detected!"
  # Also attempt to create repository via API if it does not exist yet!
  echo "Checking/creating repository '$REPO_NAME' on GitHub..."
  curl -s -X POST -H "Authorization: token $INPUT" \
       -H "Accept: application/vnd.github.v3+json" \
       https://api.github.com/user/repos \
       -d "{\"name\":\"$REPO_NAME\",\"public\":true,\"description\":\"Ultra-Premium One Piece Fan Site\"}" > /dev/null 2>&1
  
  REPO_URL="https://${INPUT}@github.com/${GITHUB_USER}/${REPO_NAME}.git"
elif [[ "$INPUT" =~ ^https://github.com ]]; then
  REPO_URL="$INPUT"
else
  REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
fi

echo "Setting remote origin to https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
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
  echo "FINAL STEP TO ACTIVATE 24/7 LIVE SITE:"
  echo "1. Go to: https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
  echo "2. Under 'Build and deployment' -> 'Source':"
  echo "   Change to 👉 'GitHub Actions'"
  echo ""
  echo "✨ Once saved, your site will be permanently live at:"
  echo "👉 https://${GITHUB_USER}.github.io/${REPO_NAME}/"
  echo ""
  echo "🌍 This link works 24/7 on every phone in the world,"
  echo "   even if your laptop is powered off and disconnected!"
  echo "=========================================================="
else
  echo ""
  echo "⚠️ Push was not completed. If you haven't created the repository yet:"
  echo "1. Open https://github.com/new and create repo: $REPO_NAME (Public)"
  echo "2. Re-run ./push_to_github.sh with your token"
fi
