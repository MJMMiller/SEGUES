import { Component, OnInit, Input } from '@angular/core';
import { SharedDataServiceService } from '../Services/shared-data-service.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
})
export class UbicacionComponent{
  @Input() sector: string="";
  @Input() fila: string="";
  @Input() columna: string="";

  constructor(private SharedDataServiceService: SharedDataServiceService  ) { }

  confirmar() {
    const data = {
      sector: this.sector,
      fila: this.fila,
      columna: this.columna
    };

   // this.SharedDataServiceService.setUbicacionData(data);
  }

}
