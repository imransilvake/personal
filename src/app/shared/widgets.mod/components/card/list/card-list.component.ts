// angular
import { Component, Input } from '@angular/core';

// app
import { ROUTING } from '../../../../../../environments/environment';
import { faExternalLinkSquareAlt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})

export class CardListComponent {
	@Input() listData;

	public routing = ROUTING;
	public faIcon = [faLock, faExternalLinkSquareAlt];

	/**
	 * open github external link
	 * @param link
	 */
	public onClickOpenGithub(link) {
		window.open(`${this.listData['githubProfile']}${link}`, '_blank');
	}
}
