import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'panel-seguridad',
    loadChildren: () => import('./panel-seguridad/panel-seguridad.module').then( m => m.PanelSeguridadPageModule)
  },
  {
    path: 'interfaz-user',
    loadChildren: () => import('./interfaz-user/interfaz-user.module').then( m => m.InterfazUserPageModule)
  },
  {
    path: 'interfaz-user-a',
    loadChildren: () => import('./interfaz-user-a/interfaz-user-a.module').then( m => m.InterfazUserAPageModule)
  },
  {
    path: 'interfaz-user-b',
    loadChildren: () => import('./interfaz-user-b/interfaz-user-b.module').then( m => m.InterfazUserBPageModule)
  },
  {
    path: 'confirmar',
    loadChildren: () => import('./confirmar/confirmar.module').then( m => m.ConfirmarPageModule)
  },
  {
    path: 'confirmar-b',
    loadChildren: () => import('./confirmar-b/confirmar-b.module').then( m => m.ConfirmarBPageModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then( m => m.AdministrationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
