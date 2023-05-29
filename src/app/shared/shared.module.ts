import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotDirective } from './directives/slot.directive';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [SlotDirective, ModalComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SlotDirective,
    ModalComponent
  ]
})
export class SharedModule { }
