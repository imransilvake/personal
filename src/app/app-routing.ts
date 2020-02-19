// angular
import { Routes } from '@angular/router';

// app
import { ROUTING } from '../environments/environment';
import { E404Component } from './packages/frame.pck/components/e404/e404.component';
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
	{
		path: ROUTING.pages.photography,
		loadChildren: () => import('./packages/modules.pck/photography.mod/photography.module').then(m => m.PhotographyModule)
	},
	{
		path: ROUTING.pages.projects,
		loadChildren: () => import('./packages/modules.pck/projects.mod/projects.module').then(m => m.ProjectsModule)
	},
	/*
	{
		path: 'code',
		components: CodeComponent
	},
	 */
	{
		path: '**',
		component: E404Component
	}
];

// routes
export const APP_ROUTES: Routes = ROUTES;
