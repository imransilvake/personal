// angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// app
import { ROUTING } from '../../../../../environments/environment';
import navigation from 'src/assets/data/common/navigation';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	public routing = ROUTING;
	public navigation = navigation;

	constructor(private _router: Router) {
	}

	/**
	 * check active route
	 *
	 * @param link
	 */
	public isActiveRoute(link) {
		return this._router.isActive(link, false);
	}
}
