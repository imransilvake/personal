// angular
import { Injectable } from '@angular/core';

// app
import { version } from '../../../../../../package.json';

@Injectable({ providedIn: 'root' })
export class AppVersionService {
	public cVersion = version;

	/**
	 * get app version
	 */
	get getAppVersion() {
		return this.cVersion;
	}
}
