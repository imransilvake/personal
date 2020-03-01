// angular
import { Component } from '@angular/core';

// app
import { ScrollTopService } from './packages/utilities.pck/accessories.mod/services/scroll-top.service';

@Component({
	selector: 'app-root',
	template: `
		<!-- Notice Block -->
		<app-notice-block class="ik-no-print"></app-notice-block>

		<!-- Header -->
		<app-header class="ik-no-print"></app-header>

		<!-- Router Outlet -->
		<router-outlet></router-outlet>

		<!-- Footer -->
		<app-footer class="ik-no-print"></app-footer>

		<!-- Scroll Top -->
		<app-scroll-top class="ik-no-print"></app-scroll-top>
	`,
})

export class AppComponent {
	constructor(private _scrollTopService: ScrollTopService) {
		// init scroll top
		this._scrollTopService.scrollTopListener();
	}
}
