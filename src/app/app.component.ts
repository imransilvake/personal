// angular
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<!-- Header -->
		<app-header></app-header>

		<!-- Router Outlet -->
		<router-outlet></router-outlet>

		<!-- Footer -->
		<app-footer></app-footer>

		<!-- Social -->
		<app-social-links></app-social-links>
	`,
})

export class AppComponent {
}
