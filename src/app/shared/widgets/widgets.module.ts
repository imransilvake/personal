// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		ReadMoreComponent
	],
	exports: [
		ReadMoreComponent
	]
})

export class WidgetsModule {
}
