import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  constructor() { }

// SECTOR A

  enviarId(texto: string, numero1: number, numero2: number) {
    console.log(texto,numero1,numero2);
  }

  enviarConf(numero1: number) {
    console.log(numero1);
  }

  // SECTOR B

  
}
