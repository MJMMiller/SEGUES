import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PanelSeguridadPageRoutingModule } from './panel-seguridad-routing.module';
import {WebcamModule} from 'ngx-webcam';
import { PanelSeguridadPage } from './panel-seguridad.page';

@NgModule({
  imports: [
    WebcamModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PanelSeguridadPageRoutingModule
  ],
  declarations: [PanelSeguridadPage]
})
export class PanelSeguridadPageModule {}
