# Angular Hexagonal Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Local API Server

Run `npm run start:mock`.

 
 ## Directory 
 - src
   -  base
   -  task
      -  application
      -  infrastructure
      -  module
  


  La arquitectura hexagonal es una metodología efectiva y robusta para mejorar la estructura de tus aplicaciones Angular. Al separar la lógica de negocio de la interfaz de usuario y enfocarse en los dominios, puertos y adaptadores, lograrás una aplicación más mantenible, escalable y flexible. Además, si cambia alguna parte de la lógica de negocio o el backend, la vista apenas sufriría cambios debido a que las capas de dominio, junto con los mapeadores, permiten abstraerse de esa lógica y facilitan la adaptación a dichos cambios sin modificar significativamente la interfaz de usuario.
