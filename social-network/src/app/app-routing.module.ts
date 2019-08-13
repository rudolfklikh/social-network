import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { AuthGuardService } from './services/auth.guard.service';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./index-page/index-page.module').then(m => m.IndexPageModule)},
  {path: 'setup', component: SetupComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent },
  {path: 'account/:name', component: ProfileComponentComponent  },
  {path: 'user',component: UserProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
