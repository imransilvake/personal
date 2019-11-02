// angular
import { Routes } from '@angular/router';

// app
import { ROUTING } from '../environments/environment';
import { E404Component } from './packages/frame.pck/components/pages/e404.component';
import { HomeComponent } from './packages/modules.pck/home.component';

const ROUTES: Routes = [
	{
		path: '',
		redirectTo: ROUTING.pages.home,
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: ROUTING.pages.profile,
		loadChildren: () => import('./packages/modules.pck/profile.mod/profile.module').then(m => m.ProfileModule)
	},
	/*
	{
		path: 'projects',
		components: ProjectsComponent
	},
	{
		path: 'news',
		components: NewsComponent
	},
	 */
	{
		path: '**',
		component: E404Component
	}
];

// routes
export const APP_ROUTES: Routes = ROUTES;
