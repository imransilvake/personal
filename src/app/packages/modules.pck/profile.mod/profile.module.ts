// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { PROFILE_ROUTES } from './profile-routing';
import { WidgetsModule } from '../../../shared/widgets/widgets.module';
import { SharedModule } from '../../../shared/shared.module';
import { FrameModule } from '../../frame.pck/frame.module';
import { ProfileComponent } from './components/profile.component';

@NgModule({
	imports: [
		RouterModule.forChild(PROFILE_ROUTES),
		SharedModule,
		WidgetsModule,
		FrameModule
	],
	declarations: [
		ProfileComponent
	]
})

export class ProfileModule {
}
