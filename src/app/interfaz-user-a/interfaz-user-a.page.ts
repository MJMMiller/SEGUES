import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
