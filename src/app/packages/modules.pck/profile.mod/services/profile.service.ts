// angular
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ProfileService {
	/**
	 * fetch profile data
	 */
	public fetchProfileData() {
		return of(null);
	}
}
