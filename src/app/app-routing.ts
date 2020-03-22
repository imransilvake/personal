// angular
import { Routes } from '@angular/router';

// app
import { ROUTING } from '../environments/environment';
import { E404Component } from './packages/frame.pck/components/e404/e404.component';

const ROUTES: Routes = [
	{
		path: ROUTING.pages.home,
		loadChildren: () => import('./packages/modules.pck/home.module').then(m => m.HomeModule),
		data: { animation: 'Home' }
	},
	{
		path: ROUTING.pages.profile,
		loadChildren: () => import('./packages/modules.pck/profile.mod/profile.module').then(m => m.ProfileModule),
		data: { animation: 'Profile' }
	},
	{
		path: ROUTING.pages.photography,
		loadChildren: () => import('./packages/modules.pck/photography.mod/photography.module').then(m => m.PhotographyModule),
		data: { animation: 'Photography' }
	},
	{
		path: ROUTING.pages.projects,
		loadChildren: () => import('./packages/modules.pck/projects.mod/projects.module').then(m => m.ProjectsModule),
		data: { animation: 'Projects' }
	},
	{
		path: '**',
		component: E404Component
	}
];

// routes
export const APP_ROUTES: Routes = ROUTES;
