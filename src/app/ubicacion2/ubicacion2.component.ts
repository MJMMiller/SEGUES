import { Component, Input } from '@angular/core';
import { SharedDataServiceService } from '../Services/shared-data-service.service';

@Component({
  selector: 'app-ubicacion2',
  templateUrl: './ubicacion2.component.html',
  styleUrls: ['./ubicacion2.component.scss'],
})
export class Ubicacion2Component {
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
