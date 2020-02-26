// angular
import { Component } from '@angular/core';

// app
import { ScrollTopService } from './packages/utilities.pck/accessories.mod/services/scroll-top.service';

@Component({
	selector: 'app-root',
	template: `
		<!-- Notice Block -->
		<app-notice-block></app-notice-block>

		<!-- Header -->
		<app-header></app-header>

		<!-- Router Outlet -->
		<router-outlet></router-outlet>

		<!-- Footer -->
		<app-footer></app-footer>

		<!-- Scroll Top -->
		<app-scroll-top></app-scroll-top>
	`,
})

export class AppComponent {
	constructor(private _scrollTopService: ScrollTopService) {
		// init scroll top
		this._scrollTopService.scrollTopListener();
	}
}
