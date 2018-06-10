import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../products.service';
import { CartService } from '../cart.service';
import { ModalService } from '../modal.service';
@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
	@Input() product: IProducts;
	constructor(
		private cartService: CartService,
		private modalService: ModalService
	) { }

	ngOnInit() {
	}

	addToCart(id: number) {
		this.modalService.open(this.product);
	}



}
