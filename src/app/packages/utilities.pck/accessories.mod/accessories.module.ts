// angular
import { NgModule } from '@angular/core';

// app
import { FirstKeyPipe } from './pipes/first-key.pipe';

@NgModule({
	declarations: [
		FirstKeyPipe
	],
	exports: [
		FirstKeyPipe
	]
})

export class AccessoriesModule {
}
