// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { PHOTOGRAPHY_ROUTES } from './photography-routing';
import { WidgetsModule } from '../../../shared/widgets.mod/widgets.module';
import { SharedModule } from '../../../shared/shared.module';
import { PhotographyComponent } from './components/photography.component';

@NgModule({
	imports: [
		RouterModule.forChild(PHOTOGRAPHY_ROUTES),
		SharedModule,
		WidgetsModule
	],
	declarations: [
		PhotographyComponent
	]
})

export class PhotographyModule {
}
