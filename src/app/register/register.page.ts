import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  UserName: string = '';

  imprimirUser() {
    console.log(this.UserName);
  }

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
