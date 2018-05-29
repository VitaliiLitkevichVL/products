import { Injectable } from '@angular/core';

export interface IProducts {
	id: number;
	title: string;
	description: string;
	cost: number;
	discountCost: any;
	new: boolean;
	img: string;
}

@Injectable()

export class ProductsService {
	data: IProducts[] = [
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
	getData(): IProducts[] {
		return this.data;
	}
  constructor() { }
}
