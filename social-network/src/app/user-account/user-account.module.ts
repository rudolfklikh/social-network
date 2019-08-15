import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAccountRoutingModule } from './user-account-routing.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ]
})
export class UserAccountModule { }
