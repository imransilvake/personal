// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { PROJECTS_ROUTES } from './projects-routing';
import { SharedModule } from '../../../shared/shared.module';
import { FieldsModule } from '../../core.pck/fields.mod/fields.module';
import { WidgetsModule } from '../../../shared/widgets.mod/widgets.module';
import { ProjectsComponent } from './components/projects.component';

@NgModule({
	imports: [
		RouterModule.forChild(PROJECTS_ROUTES),
		SharedModule,
		FieldsModule,
		WidgetsModule
	],
	declarations: [
		ProjectsComponent
	]
})

export class ProjectsModule {
}
