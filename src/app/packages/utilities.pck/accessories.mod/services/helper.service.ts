// angular
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';

// app
import * as moment from 'moment';
declare const document: any;

@Injectable({ providedIn: 'root' })
export class HelperService {
	/**
	 * detect view: app or desktop
	 */
	static get isDesktopView() {
		return window && window.innerWidth >= 768;
	}

	/**
	 * detect: window resize
	 */
	public static detectWindowResize() {
		return fromEvent(window, 'resize');
	}

	/**
	 * detect: scroll
	 */
	public static detectScroll() {
		return fromEvent(window, 'scroll');
	}

	/**
	 * detect: full-screen
	 */
	public static detectFullScreen() {
		return merge(
			fromEvent(document, 'fullscreenchange').pipe(debounceTime(200)),
			fromEvent(document, 'webkitfullscreenchange').pipe(debounceTime(200)),
			fromEvent(document, 'mozfullscreenchange').pipe(debounceTime(200)),
			fromEvent(document, 'MSFullscreenChange').pipe(debounceTime(200))
		);
	}

	/**
	 * open document in full-screen
	 */
	public static showFullScreen() {
		// request
		const elem = document.documentElement;
		const methodToBeInvoked =
			elem.requestFullscreen ||
			elem.webkitRequestFullScreen ||
			elem.mozRequestFullScreen ||
			elem.msRequestFullscreen;

		// invoke
		if (methodToBeInvoked) {
			methodToBeInvoked.call(elem);
		}
	}

	/**
	 * multilingual date
	 *
	 * @param lang
	 * @param date
	 * @param dateFormat
	 */
	public static getDate(lang: string, date: any, dateFormat?: string) {
		const format = dateFormat ? dateFormat : 'DD. MMMM YYYY';
		return moment(date).locale(lang).format(format);
	}
}
