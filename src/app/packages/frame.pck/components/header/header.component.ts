// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

// app
import navList from 'src/assets/data/other/nav-list';
import { ROUTING } from '../../../../../environments/environment';
import { faCompress, faExpand, faTextHeight, faTint } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { LocalStorageItems } from '../../../../../app.config';

declare const document: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
	public faIcons = [faExpand, faCompress, faTint, faTextHeight];
	public routing = ROUTING;
	public navList = navList;
	public fullscreen = false;

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	constructor(
		private _router: Router,
		private _helperService: HelperService,
		private _storageService: StorageService
	) {
	}

	ngOnInit() {
		// init color mode
		this.onClickThemeToggle(true);

		// init font size
		this.onClickFontSizeToggle(true);

		// detect full-screen
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

	/**
	 * toggle theme mode: dark / light
	 *
	 * @param init
	 */
	public onClickThemeToggle(init?: boolean) {
		// get colorMode from local storage
		const theme = this._storageService.get(LocalStorageItems.colorMode) || 'light';
		const reverse = (theme === 'light') ? 'dark' : 'light';
		const value = init ? theme : reverse;

		// add data attribute to body
		const body = document.getElementsByTagName('body')[0];
		body.setAttribute('data-theme', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.colorMode, value);
	}

	/**
	 * toggle font size: standard / large
	 */
	public onClickFontSizeToggle(init?: boolean) {
		// get fontSize from local storage
		const fontSize = this._storageService.get(LocalStorageItems.fontSize) || '';
		const reverse = fontSize ? '' : 'ik-font-large';
		const value = init ? fontSize : reverse;

		// add data attribute to html
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('class', value);

		// update to local storage
		this._storageService.put(LocalStorageItems.fontSize, value);
	}
}
