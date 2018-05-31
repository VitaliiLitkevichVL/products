import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productCart: BehaviorSubject<number[]> = new BehaviorSubject([]); 
  public productCart$: Observable<number[]>;

  constructor() {
    this.productCart$ = this.productCart.asObservable();
   }

}
