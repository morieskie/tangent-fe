# Tangent Frontend App

This project was created as client for the Rest API on [Employee API](https://3.88.191.199/api/employees/) which is hosted on EC2 for preview purposes. The project solution follows strictly the

## API details

Base API uri: `https://3.88.191.199/api`

## Project details:

This project was built using [Angular](https://angular.io/) version 16

# Folders structure or Module organization

This project follow the angular standard folder structure and conventions. MVVM/ MVP has been highly prioritise the encourage separation of concern, scalability, modularity and re-usabilily

The module is structured as follows:

```
.
├── README.md
├── angular.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── employee
│   │   │   │   ├── employee-form
│   │   │   │   │   ├── employee-form.component.html
│   │   │   │   │   ├── employee-form.component.scss
│   │   │   │   │   ├── employee-form.component.spec.ts
│   │   │   │   │   └── employee-form.component.ts
│   │   │   │   ├── employee-routing.module.ts
│   │   │   │   ├── employee.component.html
│   │   │   │   ├── employee.component.scss
│   │   │   │   ├── employee.component.spec.ts
│   │   │   │   ├── employee.component.ts
│   │   │   │   └── employee.module.ts
│   │   │   └── skill
│   │   │       ├── skill.component.html
│   │   │       ├── skill.component.scss
│   │   │       ├── skill.component.spec.ts
│   │   │       └── skill.component.ts
│   │   └── shared
│   │       ├── components
│   │       │   └── modal
│   │       │       ├── modal.component.html
│   │       │       ├── modal.component.scss
│   │       │       ├── modal.component.spec.ts
│   │       │       └── modal.component.ts
│   │       ├── directives
│   │       │   ├── slot.directive.spec.ts
│   │       │   └── slot.directive.ts
│   │       ├── models
│   │       │   ├── employee-skill.model.spec.ts
│   │       │   ├── employee-skill.model.ts
│   │       │   ├── employee.model.spec.ts
│   │       │   ├── employee.model.ts
│   │       │   ├── skill.model.spec.ts
│   │       │   └── skill.model.ts
│   │       ├── services
│   │       │   ├── employee-skill.service.spec.ts
│   │       │   ├── employee-skill.service.ts
│   │       │   ├── employee.service.spec.ts
│   │       │   ├── employee.service.ts
│   │       │   ├── modal.service.spec.ts
│   │       │   └── modal.service.ts
│   │       └── shared.module.ts
│   ├── assets
│   │   └── images
│   │       └── icon.jpg
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```

## Project preview link

The project can be accessed on [here](https://morieskie.github.io/tangent-fe)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--dev` flag for a development build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).