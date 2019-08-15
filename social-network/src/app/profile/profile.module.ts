import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [ProfileComponentComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModuleModule
  ]
})
export class ProfileModule { }
