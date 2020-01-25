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
	 * open full-screen mode
	 */
	public static showFullScreen() {
		const elem = document.documentElement;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	/**
	 * exit full-screen mode
	 */
	public exitFullScreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}

	/**
	 * fetch date in human readable format
	 * @param date
	 * @param dateFormat
	 */
	public static getDate(date: any, dateFormat?: string) {
		const format = dateFormat ? dateFormat : 'MMMM YYYY';
		return moment(date, 'MM-YYYY').format(format);
	}
}
