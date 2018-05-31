import { Component, OnInit } from '@angular/core';
import { ProductsService, IProducts } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../title.service'


@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	product: IProducts;
	index: number;

	constructor(
		private productServese: ProductsService,
		private activateRoute: ActivatedRoute,
		private titleService: TitleService
		) { }

	ngOnInit() {
		this.index = +this.activateRoute.snapshot.paramMap.get('id');
		this.product = this.productServese.getData().find(x => x.id === this.index);
		this.titleService.title.next(this.product.title);
	}

}
