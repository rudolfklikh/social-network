import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { UserComponent } from './home-page/user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [HomePageComponent, UserComponent],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class IndexPageModule { }
