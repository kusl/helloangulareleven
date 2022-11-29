Tue Nov 29 09:06:18 AM MST 2022

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.2Gi       2.0Gi       3.0Mi       3.4Gi       5.1Gi
Swap:          7.7Gi        47Mi       7.6Gi
System Storage
1.1G	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 11.2.9
Node: 18.12.1
OS: linux x64

Angular: 11.2.11
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.9
@angular-devkit/build-angular   0.1102.9
@angular-devkit/core            11.2.9
@angular-devkit/schematics      11.2.9
@angular/cdk                    11.2.13
@angular/cli                    11.2.9
@angular/material               11.2.13
@schematics/angular             11.2.9
@schematics/update              0.1102.9
rxjs                            6.6.7
typescript                      4.6.4
    
Done in 0.94s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.91s.
```
```bash
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
Current version: 1.0.30001168
New version:     1.0.30001434
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning " > @angular-devkit/build-angular@0.1102.9" has incorrect peer dependency "typescript@~4.0.0 || ~4.1.0".
warning "@angular-devkit/build-angular > @ngtools/webpack@11.2.9" has incorrect peer dependency "typescript@~4.0.0 || ~4.1.0".
warning " > @angular/compiler-cli@11.2.11" has incorrect peer dependency "typescript@>=4.0 <4.2".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning " > @angular-devkit/build-angular@0.1102.9" has incorrect peer dependency "typescript@~4.0.0 || ~4.1.0".
warning "@angular-devkit/build-angular > @ngtools/webpack@11.2.9" has incorrect peer dependency "typescript@~4.0.0 || ~4.1.0".
warning " > @angular/compiler-cli@11.2.11" has incorrect peer dependency "typescript@>=4.0 <4.2".
caniuse-lite has been successfully updated

Target browser changes:
- chrome 87
+ chrome 107
- edge 87
- edge 86
+ edge 107
+ edge 106
- firefox 84
+ firefox 107
- ios_saf 14.0-14.3
- ios_saf 13.4-13.7
- ios_saf 13.3
- ios_saf 13.2
- ios_saf 13.0-13.1
+ ios_saf 16.1
+ ios_saf 16.0
+ ios_saf 15.6
+ ios_saf 15.5
+ ios_saf 15.4
+ ios_saf 15.2-15.3
+ ios_saf 15.0-15.1
- safari 14
- safari 13.1
- safari 13
+ safari 16.1
+ safari 16.0
+ safari 15.6
+ safari 15.5
+ safari 15.4
+ safari 15.2-15.3
+ safari 15.1
+ safari 15
```
```bash
yarn run v1.22.19
$ ng build --configuration production
Warning: Using differential loading with targets ES5 and ES2016 or higher may
cause problems. Browsers with support for ES2015 will load the ES2016+ scripts
referenced with script[type="module"] but they may not support ES2016+ syntax.
An unhandled exception occurred: The 'buildOptimizer' option cannot be used without 'aot'.
See "/tmp/ng-0n1BaK/angular-errors.log" for further details.
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
