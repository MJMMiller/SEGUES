import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUserAPageRoutingModule } from './interfaz-user-a-routing.module';

import { InterfazUserAPage } from './interfaz-user-a.page';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUserAPageRoutingModule
  ],
  declarations: [InterfazUserAPage, UbicacionComponent]
})
export class InterfazUserAPageModule {}
