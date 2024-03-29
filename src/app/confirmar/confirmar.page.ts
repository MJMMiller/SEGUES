import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataServiceService } from '../Services/shared-data-service.service';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
  
})
export class ConfirmarPage implements OnInit {

  mostrarCardPrincipal: boolean = true;
  mostrarTuComponente: boolean = false;

  constructor(private router: Router, private sharedDataService: SharedDataServiceService) {}

  enviarConfirmacion(numero1: number) {
    this.sharedDataService.enviarConf(numero1);
  }

  mostrarComponente() {
    this.mostrarCardPrincipal = false;
    this.mostrarTuComponente = true;

    setTimeout(() => {
      this.router.navigate(['/interfaz-user/']);
    }, 3000);
  }
  ngOnInit() {
  }

}
