import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('propiedadHijo') datohijo: any;

  constructor() { }

  ngOnInit() {
  }

}
