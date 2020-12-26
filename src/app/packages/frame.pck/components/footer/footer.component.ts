// angular
import { Component } from '@angular/core';

// app
import { AppVersionService } from '../../../utilities.pck/accessories.mod/services/app-version.service';
import footer from '../../../../../assets/data/common/footer';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
	public footer = footer;
	public appVersion;
	public imageLoaded = false;

	constructor(private _appVersionService: AppVersionService) {
		this.appVersion = this._appVersionService.getAppVersion;
	}

	/**
	 * on image loaded
	 */
	public onLoadImage() {
		this.imageLoaded = true;
	}
}
