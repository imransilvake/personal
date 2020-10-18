// angular
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppVersionService {
	public version = '1.0.1';

	/**
	 * get app version
	 */
	get getAppVersion() {
		return this.version;
	}
}
