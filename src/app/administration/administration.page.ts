import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

//-----------------------------------------------------------------------------------------------------
    tiempo: string="";
    fecha: string="";
    constructor() {
      this.actualizarReloj();
      setInterval(() => this.actualizarReloj(), 1000);
     }
     
     private actualizarReloj(): void {
      const f = new Date();
      const dia = ('0' + f.getDate()).slice(-2);
      const mes = ('0' + (f.getMonth() + 1)).slice(-2);
      const anio = f.getFullYear();
      const diaSemana = f.getDay();
  
      this.tiempo = f.toLocaleTimeString();
  
      const semana = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
      const showSemana = semana[diaSemana];
      this.fecha = `${showSemana} ${dia}-${mes}-${anio}`;
    }
//-----------------------------------------------------------------------------------------------------
password: string = '';
showPassword: boolean = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

password1: string = '';
showPassword1: boolean = false;

togglePasswordVisibility1() {
  this.showPassword1 = !this.showPassword1;
}


  ngOnInit() {
  }

}
