import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import { OptionRoutingModule } from './option-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    OptionRoutingModule,
    FormsModule
  ]
})
export class OptionModule { }
