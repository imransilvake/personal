// angular
import { Component, OnInit } from '@angular/core';

// app
import navList from 'src/assets/data/other/nav-list';
import { ROUTING } from '../../../../../environments/environment';
import { faPalette, faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { LocalStorageItems } from '../../../../../app.config';

declare const document: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public faIcons = [faPalette, faTextHeight];
	public routing = ROUTING;
	public navList = navList;

	constructor(private _storageService: StorageService) {
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

		// add data attribute to html
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('class', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.fontSize, value);
	}
}
