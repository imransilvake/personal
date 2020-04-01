// angular
import { Component, OnInit } from '@angular/core';

// app
import { TranslateService } from '@ngx-translate/core';
import { AppOptions, LocalStorageItems } from '../../../../../app.config';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';

@Component({
	selector: 'app-language-switch',
	templateUrl: './language-switch.component.html',
	styleUrls: ['./language-switch.component.scss']
})

export class LanguageSwitchComponent implements OnInit {
	public appLanguages = AppOptions.languages;
	public languageSwitcher = true;

	constructor(
		private _storageService: StorageService,
		private _translate: TranslateService
	) {
	}

	ngOnInit() {
		// setup language mode
		this.onClickChangeLanguage(true);
	}

	/**
	 * on language change
	 * @param init
	 */
	public onClickChangeLanguage(init?: boolean) {
		// get languageMode from local storage
		const languageMode = this._storageService.get(LocalStorageItems.languageMode) || AppOptions.languages['en'];
		const reverse = (languageMode === AppOptions.languages['en']) ? AppOptions.languages['de'] : AppOptions.languages['en'];
		const value = init ? languageMode : reverse;
		this.languageSwitcher = value === AppOptions.languages['en'];

		// update app language
		this._translate.use(value);

		// update to local storage
		this._storageService.put(LocalStorageItems.languageMode, value, StorageTypeEnum.PERSISTANT);
	}
}
