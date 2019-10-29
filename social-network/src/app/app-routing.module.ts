import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', loadChildren: () => import('./index-page/index-page.module').then(m => m.IndexPageModule)},
  {path: 'user', loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule)},
  {path: 'setup', loadChildren: () => import('./option/option.module').then(m => m.OptionModule)},
  {path: 'account/:name', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
