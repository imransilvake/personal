// angular
import { Injectable } from '@angular/core';

// app
import { SelectDefaultInterface } from '../../../core.pck/fields.mod/interfaces/select-default-interface';
import { AppOptions } from '../../../../../app.config';

@Injectable({ providedIn: 'root' })
export class UtilityService {
	/**
	 * get app languages
	 */
	public getAppLanguages() {
		const languageList: SelectDefaultInterface[] = [
			{
				id: AppOptions.languages['en'],
				text: 'English'
			},
			{
				id: AppOptions.languages['de'],
				text: 'German'
			}
		];

		return languageList;
	}
}
