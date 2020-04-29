// angular
import { Component, Input } from '@angular/core';

// app
import { faExternalLinkSquareAlt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})

export class CardListComponent {
	@Input() listData;
	@Input() filterRoute;

	public faIcon = [faLock, faExternalLinkSquareAlt];

	/**
	 * open external link
	 * @param link
	 */
	public onClickOpenLink(link) {
		window.open(`${link}`, '_blank');
	}
}
