// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import { APP_URL, ROUTING } from '../../../../../environments/environment';
import { LocalStorageItems } from '../../../../../app.config';
import { faFont, faTint } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { NavigationTopTypesEnum } from '../../enums/navigation-top-types.enum';
import navigationTop from '../../../../../assets/data/common/navigation-top';
import navigationBottom from 'src/assets/data/common/navigation-bottom';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public appURL = APP_URL;
	public routing = ROUTING;
	public faIcons = [faTint, faFont];
	public navigationTop = navigationTop;
	public navigationBottom = navigationBottom;
	public navigationTopLanguage = NavigationTopTypesEnum.TYPE_LANGUAGE;
	public themeInactive = true;
	public fontSizeInactive = true;

	constructor(
		private _router: Router,
		private _storageService: StorageService
	) {
	}

	ngOnInit() {
		// setup color mode
		this.onClickThemeToggle(true);

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
	 * toggle theme mode: dark / light
	 * @param init
	 */
	public onClickThemeToggle(init?: boolean) {
		// get themeColorMode from local storage
		const themeColorMode = this._storageService.get(LocalStorageItems.themeColorMode) || 'light';
		const reverse = (themeColorMode === 'light') ? 'dark' : 'light';
		const value = init ? themeColorMode : reverse;
		this.themeInactive = value === 'dark';

		// add data attribute to body
		const body = document.getElementsByTagName('body')[0];
		body.setAttribute('data-theme', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.themeColorMode, value);
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
