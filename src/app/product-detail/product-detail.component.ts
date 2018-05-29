import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	product: object;
	index: number;

	constructor(private productServese: ProductsService, private activateRoute: ActivatedRoute) { }

	ngOnInit() {
		this.index = +this.activateRoute.snapshot.paramMap.get('id');
		this.product = this.productServese.getData().find(x => x.id === this.index);
	}

}
