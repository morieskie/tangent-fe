import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotDirective } from './directives/slot.directive';



@NgModule({
  declarations: [SlotDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    SlotDirective
  ]
})
export class SharedModule { }
