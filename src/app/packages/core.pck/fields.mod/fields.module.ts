// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../../../shared/shared.module';
import { InputComponent } from './components/input/input.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		InputComponent
	],
	exports: [
		InputComponent
	]
})

export class FieldsModule {
}
