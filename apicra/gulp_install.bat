::#!/usr/bin/env bash
npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help
::npm install --save-dev gulp@next
npm install --global gulp-cli
::PATH = %PATH%;%APPDATA%\npm
setx path "%PATH%;%APPDATA%\npm"
::npm config set prefix -g %APPDATA%/npm

npm link gulp
:: %APPDATA%\npm
:: export PATH = %PATH%;%APPDATA%\npm
set PATH = %PATH%;%APPDATA%\npm
:: export PATH=./node_modules/.bin:$PATH