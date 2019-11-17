// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// app
import { ROUTING } from '../../../../../environments/environment';
import { faCompress, faExpand, faTint } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import navList from 'src/assets/data/other/nav-list';

declare const document: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
	public faIcons = [faExpand, faCompress, faTint];
	public routing = ROUTING;
	public navList = navList;
	public fullscreen = false;

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	constructor(private _helperService: HelperService) {
	}

	ngOnInit() {
		HelperService.detectFullScreen()
			.pipe(takeUntil(this._ngUnSubscribe))
			.subscribe(() => {
				const fullscreenElement =
					document.fullscreenElement ||
					document.mozFullScreenElement ||
					document.webkitFullscreenElement;
				this.fullscreen = !(fullscreenElement === null);
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}

	/**
	 * show full screen
	 */
	public onClickShowFullScreen() {
		HelperService.showFullScreen();
		this.fullscreen = true;
	}

	/**
	 * exit full screen
	 */
	public onClickExitFullScreen() {
		this._helperService.exitFullScreen();
		this.fullscreen = false;
	}
}
