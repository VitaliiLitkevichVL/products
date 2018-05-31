import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, IProducts } from '../products.service';
import { TitleService } from '../title.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	dataProducts: IProducts[];
	constructor(
		private productsService: ProductsService,
		private titleService: TitleService
	) {}

	ngOnInit() {
		this.dataProducts = this.productsService.getData();
		this.titleService.title.next('Product List');
	}

}
