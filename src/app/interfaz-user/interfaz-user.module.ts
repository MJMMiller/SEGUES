import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUserPageRoutingModule } from './interfaz-user-routing.module';

import { InterfazUserPage } from './interfaz-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUserPageRoutingModule
  ],
  declarations: [InterfazUserPage]
})
export class InterfazUserPageModule {}
