// angular
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

// app
import * as moment from 'moment';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { AppOptions, LocalStorageItems } from '../../../../../app.config';

@Injectable({ providedIn: 'root' })
export class HelperService {
	constructor(private _storageService: StorageService) {
	}

	/**
	 * detect: scroll
	 */
	public static detectScroll() {
		return fromEvent(window, 'scroll');
	}

	/**
	 * detect: mouse-move
	 */
	public static detectMouseMove() {
		return fromEvent(window, 'mousemove');
	}

	/**
	 * fetch date in human readable format
	 * @param date
	 * @param dateFormat
	 * @param isLocale
	 */
	public getDate(date: any, dateFormat?: string,  isLocale= true) {
		const format = dateFormat ? dateFormat : 'MMMM YYYY';
		const language = this._storageService.get(LocalStorageItems.languageMode) || AppOptions.languages['en'];
		const locale = isLocale ? language : AppOptions.languages['en'];
		return moment(date, 'MM-YYYY').locale(locale).format(format);
	}
}
