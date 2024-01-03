import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelSeguridadPage } from './panel-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: PanelSeguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelSeguridadPageRoutingModule {}
