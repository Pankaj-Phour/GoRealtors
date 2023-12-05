# GoRealtors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- Instructions for PWA setup  -->
First of all install @angular/pwa (version according to your project ) and then run the command "ng add @angular/pwa". It will install "@angular/service-worker" package and then set up your project for pwa.

If you have finished these steps successfully then it will update your angular.json, package.json, app.module.ts, index.html, and will create some files named ngws-config.json, manifest.webmanifest, and some icons 

Then you have to build your project with ng build command and after successfully building the project for production run the command npx http-server -p 8080 -c-1 dist/(name of your project dist folder) and open the browser on localhost:8080 you will see your project there 