// angular
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
// app
import { ROUTING } from '../../../../../environments/environment';
import { LocalStorageItems } from '../../../../../app.config';
import { faFont, faTint } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { NavigationTopTypesEnum } from '../../enums/navigation-top-types.enum';
import navigationTop from '../../../../../assets/data/other/navigation-top';
import navigationBottom from 'src/assets/data/other/navigation-bottom';

declare const window: any;
declare const document: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public routing = ROUTING;
	public faIcons = [faTint, faFont];
	public navigationTopFiltered = navigationTop.filter(i => i.id !== NavigationTopTypesEnum.TYPE_PRINT);
	public navigationTop = this.navigationTopFiltered;
	public navigationBottom = navigationBottom;
	public NavigationTopPrint = NavigationTopTypesEnum.TYPE_PRINT;
	public themeInactive = true;
	public fontSizeInactive = true;

	private unSubscribe = new Subject();

	constructor(
		private _router: Router,
		private _storageService: StorageService
	) {
		// listen: router event
		this._router.events
			.pipe(
				takeUntil(this.unSubscribe),
				filter(event => event instanceof NavigationEnd)
			)
			.subscribe((res) => {
				// update top nav list
				this.navigationTop = (res && res['url'] !== `/${ROUTING.pages.profile}`) ?
					this.navigationTopFiltered : navigationTop;
			});
	}

	ngOnInit() {
		// init color mode
		this.onClickThemeToggle(true);

		// init font size
		this.onClickFontSizeToggle(true);
	}

	/**
	 * toggle theme mode: dark / light
	 * @param init
	 */
	public onClickThemeToggle(init?: boolean) {
		// get colorMode from local storage
		const theme = this._storageService.get(LocalStorageItems.colorMode) || 'light';
		const reverse = (theme === 'light') ? 'dark' : 'light';
		const value = init ? theme : reverse;
		this.themeInactive = value === 'dark';

		// add data attribute to body
		const body = document.getElementsByTagName('body')[0];
		body.setAttribute('data-theme', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.colorMode, value);
	}

	/**
	 * toggle font size: standard / large
	 * @param init
	 */
	public onClickFontSizeToggle(init?: boolean) {
		// get fontSize from local storage
		const fontSize = this._storageService.get(LocalStorageItems.fontSize) || '';
		const reverse = fontSize ? '' : 'ik-font-large';
		const value = init ? fontSize : reverse;
		this.fontSizeInactive = value === 'ik-font-large';

		// add data attribute to html
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('class', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.fontSize, value);
	}

	/**
	 * print profile
	 */
	public printProfilePage() {
		if (window) {
			window.print();
		}
	}
}
