import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  active: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  observe() {
    return this.active;
  }

  activate() {
    this.active.next(true);
    console.log('Active')
  }

  deActivate() {
    this.active.next(false);
  }
}
