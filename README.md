# lazyloadtest
Project to test angular-cli lazy loading an external module

## Requirements
If you don't already have them:

npm install -g angular-cli

npm install -g gulp
## Setup
Change directory to `lazyloadLib`

npm install

npm run build

cd dist

npm link

cd..

cd..

--------

Change directory to `lazyloadApp`

npm install

npm serve -aot

http://localhost:4200/

## In App
click on load test button

notice Test Component appears above button

Also notice test.module.chunk.js is lazy loaded

And notice Sample Component is displayed below the button
