Tue Nov 29 05:40:48 PM MST 2022

# Angular Ten Second Look

Code: https://github.com/kusl/angulartensecondlook

Deployment: https://github.com/angularten/angularten.github.io

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.9Gi       1.1Gi       3.0Mi       3.7Gi       4.5Gi
Swap:          7.7Gi        46Mi       7.6Gi
System Storage
1016M	.
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
    
Done in 0.93s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.96s.
```
```bash
Current version: 1.0.30001434
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

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production
Warning: Using differential loading with targets ES5 and ES2016 or higher may
cause problems. Browsers with support for ES2015 will load the ES2016+ scripts
referenced with script[type="module"] but they may not support ES2016+ syntax.
An unhandled exception occurred: The 'buildOptimizer' option cannot be used without 'aot'.
See "/tmp/ng-pz6o2J/angular-errors.log" for further details.
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Tue Nov 29 05:42:08 PM MST 2022
Tue Nov 29 05:42:27 PM MST 2022
yarn version v1.22.19
info Current version: 0.0.90
info New version: 0.0.91
Done in 0.20s.
