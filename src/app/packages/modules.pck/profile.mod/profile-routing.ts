// angular
import { Routes } from '@angular/router';

// app
import { ProfileComponent } from './components/profile.component';

// routes
export const PROFILE_ROUTES: Routes = [
	{
		path: '',
		children: [
			{
				path: 'overview',
				component: ProfileComponent
			}
		]
	}
];
