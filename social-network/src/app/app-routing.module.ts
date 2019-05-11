import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './services/auth.guard.service';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [AuthGuardService]},
  {path: 'setup', component: SetupComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent },
  {path: 'account/:name', component: ProfileComponentComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
