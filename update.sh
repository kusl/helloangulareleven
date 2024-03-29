#!/bin/bash

cd ~/src/angular/HelloAngularEleven/;
date > README.md;
git add .;
git commit -m "add timestamp";

echo '' >> README.md;
echo '# Coloradoquiz' >> README.md;
echo '' >> README.md;

echo '' >> README.md;
echo 'This project is live at [https://coloradoquiz.web.app](https://coloradoquiz.web.app "colorado!") thanks to Firebase.' >> README.md;
echo '' >> README.md;

echo 'CI Status: ' >> README.md;
echo '' >> README.md;

echo '[![Deploy to Firebase Hosting on merge](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/teamkushal/coloradoquiz/actions/workflows/firebase-hosting-merge.yml)' >> README.md;
echo '' >> README.md;

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin add system status";
echo "System Memory" >> README.md;
free -h >> README.md;
echo "System Storage" >> README.md;
du -sh .>> README.md;
git add .;
git commit -m "add system status";
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end add system status";


echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin update node";
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh;  # This loads NVM
source ~/.nvm/nvm.sh;
time nvm install --lts;
time nvm use --lts;
export NODE_OPTIONS="--max-old-space-size=8000"; time npm install --global @angular/cli yarn;
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng --version >> README.md;
time yarn >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end update node";

export NODE_OPTIONS="--max-old-space-size=8000";

git add .;
git commit -m "begin prepare to update angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng update @angular/core @angular/cli @angular/material @angular/localize;
git add .;
git commit -m "end prepare to update angular";

echo "\`\`\`bash" >> README.md;
git add .;
git commit -m "begin prepare to build angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng build --configuration production >> README.md;
echo "\`\`\`" >> README.md;
git add .;
git commit -m "end prepare to build angular";

echo "\`\`\`bash" > locallog/fedoratest.md;
git add .;
git commit -m "begin prepare to unit test angular";
export NODE_OPTIONS="--max-old-space-size=8000"; time yarn run ng test >> locallog/fedoratest.md;
echo "\`\`\`" >> locallog/fedoratest.md;
git add .;
git commit -m "end prepare to unit test angular";

date >> README.md;
time yarn version --patch >> README.md;
git add .;
git commit -m "add timestamp";
git pull --rebase origin master --strategy-option=ours;
git add .;
git commit -m "merge from remote";
git push origin master;

