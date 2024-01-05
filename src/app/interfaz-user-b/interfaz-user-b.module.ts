import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUserBPageRoutingModule } from './interfaz-user-b-routing.module';

import { InterfazUserBPage } from './interfaz-user-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUserBPageRoutingModule
  ],
  declarations: [InterfazUserBPage]
})
export class InterfazUserBPageModule {}
