import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazUserBPage } from './interfaz-user-b.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazUserBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazUserBPageRoutingModule {}
