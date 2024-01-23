import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPageRoutingModule } from './confirmar-routing.module';

import { ConfirmarPage } from './confirmar.page';
import { GraciasComponent } from '../gracias/gracias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPageRoutingModule
  ],
  declarations: [ConfirmarPage,GraciasComponent]
})
export class ConfirmarPageModule {}
