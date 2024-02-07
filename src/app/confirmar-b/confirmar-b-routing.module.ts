import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarBPage } from './confirmar-b.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarBPageRoutingModule {}
