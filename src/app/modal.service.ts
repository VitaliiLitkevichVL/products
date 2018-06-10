import { Injectable } from '@angular/core';
import { IProducts } from './products.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalVisible = false;
  product: IProducts;

  constructor (
    private cartService: CartService
  ) {}

  close() {
    this.modalVisible = false;
  }

  open(product: IProducts) {
    this.modalVisible = true;
    this.product = product;
  }

  ok() {
    this.cartService.cartArr.push(this.product.id);
    console.log(this.cartService.cartArr);
    this.close();
  }

  cancel() {
    this.close();
  }

}
