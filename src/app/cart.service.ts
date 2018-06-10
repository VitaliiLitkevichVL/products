import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartArr: number[] = [];
  cartArr$ = new Subject();

  constructor() {
    
   }

}
