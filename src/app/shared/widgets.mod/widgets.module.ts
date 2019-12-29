// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		ReadMoreComponent,
		CodeBlockComponent
	],
	exports: [
		ReadMoreComponent,
		CodeBlockComponent
	]
})

export class WidgetsModule {
}
