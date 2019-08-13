import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './home-page/user/user.component';
import { AuthGuardService } from '../services/auth.guard.service';
const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule { }
