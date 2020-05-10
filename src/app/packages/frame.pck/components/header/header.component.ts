// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { ROUTING } from '../../../../../environments/environment';
import { LocalStorageItems } from '../../../../../app.config';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import navigation from 'src/assets/data/common/navigation';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public routing = ROUTING;
	public faIcons = [faFont];
	public navigation = navigation;
	public fontSizeInactive = true;

	constructor(
		private _router: Router,
		private _storageService: StorageService
	) {
	}

	ngOnInit() {
		// setup font size
		this.onClickFontSizeToggle(true);
	}

	/**
	 * check active route
	 * @param link
	 */
	public isActiveRoute(link) {
		return this._router.isActive(link, false);
	}

	/**
	 * toggle font size: standard / large
	 * @param init
	 */
	public onClickFontSizeToggle(init?: boolean) {
		// get fontSizeMode from local storage
		const fontSizeMode = this._storageService.get(LocalStorageItems.fontSizeMode) || 'normal';
		const reverse = (fontSizeMode === 'normal') ? 'ik-zoom' : 'normal';
		const value = init ? fontSizeMode : reverse;
		this.fontSizeInactive = value === 'ik-zoom';

		// add data attribute to html
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('class', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.fontSizeMode, value);
	}
}
