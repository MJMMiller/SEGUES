import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarBPageRoutingModule } from './confirmar-b-routing.module';

import { ConfirmarBPage } from './confirmar-b.page';
import { Gracias2Component } from '../gracias2/gracias2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarBPageRoutingModule
  ],
  declarations: [ConfirmarBPage,Gracias2Component]
})
export class ConfirmarBPageModule {}
