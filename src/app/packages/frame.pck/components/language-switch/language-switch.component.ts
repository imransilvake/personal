// angular
import { Component } from '@angular/core';

// app
import { AppOptions } from '../../../../../app.config';

@Component({
	selector: 'app-language-switch',
	templateUrl: './language-switch.component.html',
	styleUrls: ['./language-switch.component.scss']
})

export class LanguageSwitchComponent {
	public appLanguages = AppOptions.languages;
	public languageSwitcher = true;

	/**
	 * on language change
	 */
	public onClickChangeLanguage() {
		this.languageSwitcher = !this.languageSwitcher;
	}
}
