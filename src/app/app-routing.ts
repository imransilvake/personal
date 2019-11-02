// angular
import { Routes } from '@angular/router';

// app
import { ROUTING } from '../environments/environment';
import { E404Component } from './packages/frame.pck/components/pages/e404.component';

const ROUTES: Routes = [
	{
		path: '',
		redirectTo: ROUTING.pages.home,
		pathMatch: 'full'
	},
	/*
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'projects',
		component: ProjectsComponent
	},
	{
		path: 'news',
		component: NewsComponent
	},
	 */
	{
		path: '**',
		component: E404Component
	}
];

// routes
export const APP_ROUTES: Routes = ROUTES;
