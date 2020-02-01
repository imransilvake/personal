// angular
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

// app
import * as moment from 'moment';

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
	 * fetch date in human readable format
	 * @param date
	 * @param dateFormat
	 */
	public static getDate(date: any, dateFormat?: string) {
		const format = dateFormat ? dateFormat : 'MMMM YYYY';
		return moment(date, 'MM-YYYY').format(format);
	}
}
