# lazyloadtest
Project to test angular-cli lazy loading an external module

This project is to examine the question I have on stack overflow:

[stackoverflow question](https://stackoverflow.com/questions/46333005/how-to-use-systemjsngmoduleloader-to-lazy-load-an-external-module?noredirect=1#comment79631419_46333005)

## Modules and Components
`TestModule` provides `TestComponent`

This is a local Module

`SampleModule` provides `SampleComponent`

This is from the lazyloadLib
## Requirements
If you don't already have them:

[NodeJS](https://nodejs.org/en/download/)

npm install -g angular-cli

npm install -g gulp
## Setup
To see the working local lazyload and lib usage:

git checkout tags/working

--------------------

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

npm link lazyloadLib

ng serve -aot

http://localhost:4200/

## In App
click on load test button

notice local Test Component appears above button

Also notice test.module.chunk.js is lazy loaded

Then see that Sample Component (from lazyloadLib) is displayed below the button

## See attempt to lazy load external module
git checkout master

Change Directory to `lazyloadLib`

run npm install if you haven't already

npm run build

cd..

Change Directory to `lazyloadApp`

run npm install if you haven't already

ng serve -aot

Notice build errors

