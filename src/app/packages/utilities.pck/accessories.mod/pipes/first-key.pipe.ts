// angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FirstKey' })
export class FirstKeyPipe implements PipeTransform {
	/**
	 * get first element key from an object
	 * @param list
	 * @param args
	 */
	transform(list: object, ...args): string[] {
		for (const key in list) {
			if (list.hasOwnProperty(key)) {
				return [key];
			}
		}
	}
}
