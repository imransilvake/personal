// angular
import { Routes } from '@angular/router';

// app
import { ROUTING } from '../environments/environment';
import { E404Component } from './packages/frame.pck/components/e404/e404.component';

// routes
const ROUTES: Routes = [
	{
		path: ROUTING.home,
		loadChildren: () => import('./packages/modules.pck/home.module').then(m => m.HomeModule)
	},
	{
		path: ROUTING.profile,
		loadChildren: () => import('./packages/modules.pck/profile.mod/profile.module').then(m => m.ProfileModule)
	},
	{
		path: ROUTING.photography,
		loadChildren: () => import('./packages/modules.pck/photography.mod/photography.module').then(m => m.PhotographyModule)
	},
	{
		path: ROUTING.projects,
		loadChildren: () => import('./packages/modules.pck/projects.mod/projects.module').then(m => m.ProjectsModule)
	},
	{
		path: '**',
		component: E404Component
	}
];
export const APP_ROUTES: Routes = ROUTES;
