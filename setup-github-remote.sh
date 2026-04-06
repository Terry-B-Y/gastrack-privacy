#!/usr/bin/env bash
# Run once after: gh auth login
set -euo pipefail
cd "$(dirname "$0")"

if ! gh auth status &>/dev/null; then
  echo "Not logged in. Run first:"
  echo "  gh auth login"
  exit 1
fi

# Create public repo on GitHub under your account and push this folder.
gh repo create gastrack-privacy --public --source=. --remote=origin --push

echo ""
echo "Next: GitHub → repo → Settings → Pages → Deploy from branch → main, / (root)"
echo "Privacy policy URL:"
echo "  https://$(gh api user -q .login).github.io/gastrack-privacy/"
