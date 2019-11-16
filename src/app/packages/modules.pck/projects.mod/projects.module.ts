// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { WidgetsModule } from '../../../shared/widgets/widgets.module';
import { SharedModule } from '../../../shared/shared.module';
import { FrameModule } from '../../frame.pck/frame.module';
import { ProjectsComponent } from './components/projects.component';
import { PROJECTS_ROUTES } from './projects-routing';

@NgModule({
	imports: [
		RouterModule.forChild(PROJECTS_ROUTES),
		SharedModule,
		WidgetsModule,
		FrameModule
	],
	declarations: [
		ProjectsComponent
	]
})

export class ProjectsModule {
}
