import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service'

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
	public tit: any;

	constructor(
		private titleService: TitleService
		) {}

	ngOnInit() {
		this.titleService.title$.subscribe(tit => {
			this.tit = tit;
		});
	}

}
