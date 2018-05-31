import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productCaunt: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.productCart$.subscribe(count => {
      this.productCaunt = count.length;
    })
  }

}
