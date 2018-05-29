import { Injectable } from '@angular/core';

@Injectable()

export class ProductsService {
	data: object[] = [
	{
		id: 1,
		title:'test title 1',
		description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
		cost: 249,
		discountCost: 299,
		new: true,
		img: 'assets/img/img-01.png'
	},
	{
		id: 2,
		title:'test title 2',
		description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
		cost: 249,
		discountCost: null,
		new: true,
		img: 'assets/img/img-02.png'
	}
	];
	getData(): object[] {
		return this.data;
	}
  constructor() { }
}
