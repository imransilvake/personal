// angular
import { NgModule } from '@angular/core';

// app
import { DividerComponent } from './divider/divider.component';
import { BadgeComponent } from './badge/badge.component';
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		DividerComponent,
		BadgeComponent,
		ReadMoreComponent
	],
	exports: [
		DividerComponent,
		BadgeComponent,
		ReadMoreComponent
	]
})

export class WidgetsModule {
}
