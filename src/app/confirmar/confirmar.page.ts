import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
  
})
export class ConfirmarPage implements OnInit {

  mostrarCardPrincipal: boolean = true;
  mostrarTuComponente: boolean = false;

  constructor(private router: Router) {}

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
