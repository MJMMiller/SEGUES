import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
})
export class UbicacionComponent{
  @Input() sector: string="";
  @Input() fila: string="";
  @Input() columna: string="";

  constructor() { }

}
