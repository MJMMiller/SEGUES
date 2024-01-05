import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUserAPageRoutingModule } from './interfaz-user-a-routing.module';

import { InterfazUserAPage } from './interfaz-user-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUserAPageRoutingModule
  ],
  declarations: [InterfazUserAPage]
})
export class InterfazUserAPageModule {}
