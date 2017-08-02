#! /bin/sh
if [ "$GITHUB_TOKEN" ]; then
  git clone git@github.com:jerry-i/jerry-i.github.io.git resource
  npm run build
  cd public
  git add .
  git -c user.name='travis' -c user.email=$NPM_EMAIL commit -m "update: git-page"
  git push -f https://$GITHUB_TOKEN:x-oauth-basic@github.com/jerry-i/jerry-i.github.io.git gh-pages
  cd ..
fi
