import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Email: string = '';

  imprimirMail() {
    console.log(this.Email);
  }

  Password: string = '';

  imprimirContra() {
    console.log(this.Password);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
