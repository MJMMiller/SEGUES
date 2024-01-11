import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-panel-seguridad',
  templateUrl: './panel-seguridad.page.html',
  styleUrls: ['./panel-seguridad.page.scss'],
  
})
export class PanelSeguridadPage implements OnInit {
  
  private trigger: Subject<void> = new Subject<void>();
  public mostrarCamara: boolean = false;

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // Método para activar la cámara cuando se hace clic en el botón
  activarCamara(): void {
    this.mostrarCamara = true;
  }
  desactivarCamara(): void {
    this.mostrarCamara = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
