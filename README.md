# typescript 2.1 issue ts-loader-issue416
repro project for ts-loader issue 416 https://github.com/TypeStrong/ts-loader/issues/416 and typescript issue https://github.com/Microsoft/TypeScript/issues/13004

How to reproduce the issue:
* run: yarn install
* run: node_modules/.bin/tsc to see the error using tsc directly
* run: node_modules/.bin/webpack to see the error using typescript through ts-loader
