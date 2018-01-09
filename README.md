# Getting started

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```
 
2. Launch development server, and open `localhost:5200` in your browser:
 ```sh
 npm start
 ```
 or if in dev mode
 ```
 ng serve --proxy-config proxy.conf.js
 ```
 ## Main tasks
 
 Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).
 
 Task                            | Description
 --------------------------------|--------------------------------------------------------------------------------------
 `npm start`                     | Run development server on `http://localhost:5200/`
 `npm run build [-- --env=prod]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
 `npm test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
 `npm run test:ci`               | Lint code and run unit tests once for continuous integration
 `npm run e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
 `npm run lint`                  | Lint code
 `npm run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
 `npm run docs`                  | Display project documentation
 
 When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
 forget to prepend `--` to pass arguments to npm scripts).
 
 The default build environment is `prod`.
 
 ## Development server
 
 Run `npm start` for a dev server. Navigate to `http://localhost:5200/`. The app will automatically reload if you change
 any of the source files.
 You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.
## Features

* custom themes support (3 themes included)
* lazy-loading of feature modules
* lazy reducers
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and custom components in `SharedModule`
 
## Stack

* Angular
* ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
* Angular Material
* Bootstrap 4 (only reset and grids)

## Build

Built with [Angular CLI](https://github.com/angular/angular-cli)
