// angular
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})

export class CardListComponent {
	@Input() listData;
	@Input() filterRoute;

	/**
	 * open external link
	 *
	 * @param link
	 */
	public onClickOpenLink(link) {
		window.open(`${link}`, '_blank');
	}
}
