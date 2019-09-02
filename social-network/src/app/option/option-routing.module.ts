import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { AuthGuardService } from '../shared-services/auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component : SetupComponent, canActivate : [AuthGuardService], data: {animation: 'SetupPage'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionRoutingModule { }
