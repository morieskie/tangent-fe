import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotDirective } from './directives/slot.directive';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SlotDirective, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SlotDirective,
    ModalComponent
  ]
})
export class SharedModule { }
