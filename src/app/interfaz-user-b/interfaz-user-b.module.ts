import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUserBPageRoutingModule } from './interfaz-user-b-routing.module';

import { InterfazUserBPage } from './interfaz-user-b.page';
import { Ubicacion2Component } from '../ubicacion2/ubicacion2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUserBPageRoutingModule
  ],
  declarations: [InterfazUserBPage,Ubicacion2Component]
})
export class InterfazUserBPageModule {}
