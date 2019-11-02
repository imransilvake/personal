// angular
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppVersionService {
	public version = '0.0.0';

	/**
	 * get app version
	 */
	get appVersion() {
		return this.version;
	}
}
