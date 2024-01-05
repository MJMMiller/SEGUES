import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazUserPage } from './interfaz-user.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazUserPageRoutingModule {}
