import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: BehaviorSubject<string> = new BehaviorSubject('Product list'); 
  public title$: Observable<string>;

  constructor() {
    this.title$ = this.title.asObservable();
   }
}
