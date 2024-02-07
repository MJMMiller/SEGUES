import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../Services/shared-data-service.service';

@Component({
  selector: 'app-interfaz-user-a',
  templateUrl: './interfaz-user-a.page.html',
  styleUrls: ['./interfaz-user-a.page.scss'],
})
export class InterfazUserAPage implements OnInit {

  mostrarCard: boolean = false;
  ocultarBoton: boolean = false;
  
  mostrarCard1: boolean = false;
  mostrarCard2: boolean = false;
  mostrarCard3: boolean = false;
  mostrarCard4: boolean = false;
  mostrarCard5: boolean = false;
  mostrarCard6: boolean = false;
  mostrarCard7: boolean = false;
  mostrarCard8: boolean = false;
  mostrarCard9: boolean = false;
  mostrarCard10: boolean = false;
  mostrarCard11: boolean = false;
  mostrarCard12: boolean = false;
  mostrarCard13: boolean = false;
  mostrarCard14: boolean = false;
  mostrarCard15: boolean = false;
  mostrarCard16: boolean = false;
  mostrarCard17: boolean = false;
  mostrarCard18: boolean = false;
  mostrarCard19: boolean = false;
  mostrarCard20: boolean = false;
  mostrarCard21: boolean = false;
  mostrarCard22: boolean = false;
  mostrarCard23: boolean = false;
  mostrarCard24: boolean = false;
  mostrarCard25: boolean = false;
  mostrarCard26: boolean = false;
  mostrarCard27: boolean = false;

  toggleCard(){
    this.mostrarCard = !this.mostrarCard;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard1(){
    this.mostrarCard1 = !this.mostrarCard1;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard2(){
    this.mostrarCard2 = !this.mostrarCard2;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard3(){
    this.mostrarCard3 = !this.mostrarCard3;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard4(){
    this.mostrarCard4 = !this.mostrarCard4;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard5(){
    this.mostrarCard5 = !this.mostrarCard5;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard6(){
    this.mostrarCard6 = !this.mostrarCard6;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard7(){
    this.mostrarCard7 = !this.mostrarCard7;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard8(){
    this.mostrarCard8 = !this.mostrarCard8;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard9(){
    this.mostrarCard9 = !this.mostrarCard9;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard10(){
    this.mostrarCard10 = !this.mostrarCard10;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard11(){
    this.mostrarCard11 = !this.mostrarCard11;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard12(){
    this.mostrarCard12 = !this.mostrarCard12;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard13(){
    this.mostrarCard13 = !this.mostrarCard13;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard14(){
    this.mostrarCard14 = !this.mostrarCard14;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard15(){
    this.mostrarCard15 = !this.mostrarCard15;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard16(){
    this.mostrarCard16 = !this.mostrarCard16;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard17(){
    this.mostrarCard17 = !this.mostrarCard17;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard18(){
    this.mostrarCard18 = !this.mostrarCard18;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard19(){
    this.mostrarCard19 = !this.mostrarCard19;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard20(){
    this.mostrarCard20 = !this.mostrarCard20;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard21(){
    this.mostrarCard21 = !this.mostrarCard21;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard22(){
    this.mostrarCard22 = !this.mostrarCard22;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard23(){
    this.mostrarCard23 = !this.mostrarCard23;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard24(){
    this.mostrarCard24 = !this.mostrarCard24;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard25(){
    this.mostrarCard25 = !this.mostrarCard25;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard26(){
    this.mostrarCard26 = !this.mostrarCard26;
    this.ocultarBoton = !this.ocultarBoton;
  }

  toggleCard27(){
    this.mostrarCard27 = !this.mostrarCard27;
    this.ocultarBoton = !this.ocultarBoton;
  }


  constructor(private sharedDataService: SharedDataServiceService) { }

  enviarIdUnico(texto: string, numero1: number, numero2: number) {
    this.sharedDataService.enviarId(texto, numero1, numero2);
  }
  ngOnInit() {
  }

}
