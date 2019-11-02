// angular
import { Component } from '@angular/core';

// app
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AppVersionService } from '../../../utilities.pck/accessories.mod/services/app-version.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
	public faIcon = faHeart;
	public appVersion;

	constructor(private _appVersion: AppVersionService) {
		this.appVersion = _appVersion.getAppVersion;
	}
}
