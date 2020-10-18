// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../../../shared.module';
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
