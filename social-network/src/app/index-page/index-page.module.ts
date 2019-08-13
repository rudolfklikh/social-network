import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexPageRoutingModule } from './index-page-routing.module';
import { UserComponent } from './home-page/user/user.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { HoverDirective } from '../hover.directive';
@NgModule({
  declarations: [HomePageComponent, UserComponent, CapitalizePipe, SearchPipe, HoverDirective],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    FormsModule
  ]
})
export class IndexPageModule { }
