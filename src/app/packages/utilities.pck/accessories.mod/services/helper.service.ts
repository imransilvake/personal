// angular
import { Injectable } from '@angular/core';
import { fromEvent, merge } from 'rxjs';

// app
import * as moment from 'moment';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { AppOptions, LocalStorageItems } from '../../../../../app.config';

@Injectable({ providedIn: 'root' })
export class HelperService {
	constructor(private _storageService: StorageService) {
	}

	/**
	 * detect: network connection
	 */
	public static detectNetworkConnection() {
		return merge(
			fromEvent(window, 'offline'),
			fromEvent(window, 'online')
		);
	}

	/**
	 * detect: mouse-move
	 */
	public static detectMouseMove() {
		return fromEvent(window, 'mousemove');
	}

	/**
	 * detect: window scroll
	 */
	public static detectWindowScroll() {
		return fromEvent(window, 'scroll');
	}

	/**
	 * detect: window resize
	 */
	public static detectWindowResize() {
		return fromEvent(window, 'resize');
	}

	/**
	 * prevent default
	 * @param e
	 */
	public preventDefault(e) {
		e.preventDefault();
	}

	/**
	 * stop html and body scroll
	 */
	public stopHtmlAndBodyScroll() {
		document.documentElement.classList.add('cd-hide-overflow');
		document.body.classList.add('cd-hide-overflow');
		document.body.addEventListener('touchmove', this.preventDefault, { passive: false });
	}

	/**
	 * reset html and body scroll
	 */
	public resetHtmlAndBodyScroll() {
		document.documentElement.classList.remove('cd-hide-overflow');
		document.body.classList.remove('cd-hide-overflow');
		document.body.removeEventListener('touchmove', this.preventDefault);
	}

	/**
	 * fetch date in human readable format
	 * @param date
	 * @param dateFormat
	 * @param isLocale
	 */
	public getDate(date: any, dateFormat?: string, isLocale = true) {
		const format = dateFormat ? dateFormat : 'MMMM YYYY';
		const language = this._storageService.get(LocalStorageItems.languageMode) || AppOptions.languages['en'];
		const locale = isLocale ? language : AppOptions.languages['en'];
		return moment(date, 'MM-YYYY').locale(locale).format(format);
	}
}
