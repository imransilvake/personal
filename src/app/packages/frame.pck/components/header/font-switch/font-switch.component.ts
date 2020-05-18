// angular
import { Component, OnInit } from '@angular/core';

// app
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageItems } from '../../../../../../app.config';
import { StorageService } from '../../../../core.pck/storage.mod/services/storage.service';

@Component({
	selector: 'app-font-switch',
	templateUrl: './font-switch.component.html',
	styleUrls: ['./font-switch.component.scss']
})

export class FontSwitchComponent implements OnInit {
	public faIcon = [faFont];
	public fontSizeSwitcher = true;

	constructor(private _storageService: StorageService) {
	}

	ngOnInit() {
		// setup font size
		this.onClickChangeFontSize(true);
	}

	/**
	 * on change font size
	 * @param init
	 */
	public onClickChangeFontSize(init?: boolean) {
		// get fontSizeMode from local storage
		const fontSizeMode = this._storageService.get(LocalStorageItems.fontSizeMode) || 'normal';
		const reverse = (fontSizeMode === 'normal') ? 'ik-zoom' : 'normal';
		const value = init ? fontSizeMode : reverse;
		this.fontSizeSwitcher = value === 'ik-zoom';

		// add data attribute to html
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('class', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.fontSizeMode, value);
	}
}
