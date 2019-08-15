import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './shared/pipes/search.pipe';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { HoverDirective } from './shared/directives/hover.directive';
@NgModule({
  declarations: [SearchPipe, CapitalizePipe, HoverDirective],
  imports: [
    CommonModule
  ], 
  exports: [
    SearchPipe, CapitalizePipe, HoverDirective
  ]
})
export class SharedModuleModule { }
