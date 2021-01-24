// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { PROFILE_ROUTES } from './profile-routing';
import { SharedModule } from '../../../shared.module';
import { ProfileComponent } from './components/profile.component';

@NgModule({
	imports: [RouterModule.forChild(PROFILE_ROUTES), SharedModule],
	declarations: [ProfileComponent]
})
export class ProfileModule {}
