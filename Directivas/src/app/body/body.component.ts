import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categorias: any = [{ "codigo": 1, 'texto': 'Política'},
  { 'codigo': 2, 'texto': 'Educación'},
  { 'codigo': 3, 'texto': 'Seguridad'}];

  noticias: any = [{"categoria":{ "codigo": 1, 'texto': 'Política'}, "titulo": "Los vecinos fueron los primeros en tratar de auxiliar a las victimas del avión", "texto": "El día estaba nublado y el calor sofocaba, de esa manera justificaron que podría haberse tratado de una falla en los circuitos por un recalentamiento de los mismos que ocasionó la muerte de 11 pasajeros de Boeing 777 con destino a la ciudad de San Francisco.",
  "imagen":"http://k43.kn3.net/5CDB0798E.jpg"},
  {
    "categoria": {
      "codigo": 1,
      'texto': 'Política'
    },
    "titulo": "Los vecinos fueron los primeros en tratar de auxiliar a las victimas del avión",
    "texto": "El día estaba nublado y el calor sofocaba, de esa manera justificaron que podría haberse tratado de una falla en los circuitos por un recalentamiento de los mismos que ocasionó la muerte de 11 pasajeros de Boeing 777 con destino a la ciudad de San Francisco.",
    "imagen": "http://k43.kn3.net/5CDB0798E.jpg"
  },
  {
    "categoria": {
      "codigo": 3,
      'texto': 'Política'
    },
    "titulo": "Los vecinos fueron los primeros en tratar de auxiliar a las victimas del avión",
    "texto": "El día estaba nublado y el calor sofocaba, de esa manera justificaron que podría haberse tratado de una falla en los circuitos por un recalentamiento de los mismos que ocasionó la muerte de 11 pasajeros de Boeing 777 con destino a la ciudad de San Francisco.",
    "imagen": "http://k43.kn3.net/5CDB0798E.jpg"
  },
  {
    "categoria": {
      "codigo": 2,
      'texto': 'Política'
    },
    "titulo": "Los vecinos fueron los primeros en tratar de auxiliar a las victimas del avión",
    "texto": "El día estaba nublado y el calor sofocaba, de esa manera justificaron que podría haberse tratado de una falla en los circuitos por un recalentamiento de los mismos que ocasionó la muerte de 11 pasajeros de Boeing 777 con destino a la ciudad de San Francisco.",
    "imagen": "http://k43.kn3.net/5CDB0798E.jpg"
  }];


  constructor() {


  }



  ngOnInit() {
  }

}
