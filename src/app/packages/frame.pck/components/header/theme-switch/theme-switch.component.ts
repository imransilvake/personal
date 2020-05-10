// angular
import { Component, OnInit } from '@angular/core';

// app
import { faStarAndCrescent, faSun } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageItems } from '../../../../../../app.config';
import { StorageService } from '../../../../core.pck/storage.mod/services/storage.service';

@Component({
	selector: 'app-theme-switch',
	templateUrl: './theme-switch.component.html',
	styleUrls: ['./theme-switch.component.scss']
})

export class ThemeSwitchComponent implements OnInit {
	public faIcon = [faStarAndCrescent, faSun];
	public themeSwitcher = true;

	constructor(private _storageService: StorageService) {
	}

	ngOnInit() {
		// setup theme mode
		this.onClickChangeTheme(true);
	}

	/**
	 * on change theme
	 * @param init
	 */
	public onClickChangeTheme(init?: boolean) {
		// get themeColorMode from local storage
		const themeColorMode = this._storageService.get(LocalStorageItems.themeColorMode) || 'light';
		const reverse = (themeColorMode === 'light') ? 'dark' : 'light';
		const value = init ? themeColorMode : reverse;
		this.themeSwitcher = value === 'dark';

		// add data attribute to body
		const body = document.getElementsByTagName('body')[0];
		body.setAttribute('data-theme', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.themeColorMode, value);
	}
}
