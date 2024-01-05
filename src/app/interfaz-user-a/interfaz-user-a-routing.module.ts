import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazUserAPage } from './interfaz-user-a.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazUserAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazUserAPageRoutingModule {}
