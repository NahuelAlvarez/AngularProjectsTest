import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codigoInteractivo';
  titulo: any = 'Hola mundo codigoInteractivo';
  datos: any = { nombre: 'Nahuel',
    apellido: 'Sebastian',
    edad: 34,
    dni: '31436161'};
}
