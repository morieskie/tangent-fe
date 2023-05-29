import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSlot]'
})
export class SlotDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
