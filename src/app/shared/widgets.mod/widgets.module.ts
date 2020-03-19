// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		ReadMoreComponent,
		CodeBlockComponent,
		CardComponent
	],
	exports: [
		ReadMoreComponent,
		CodeBlockComponent,
		CardComponent
	]
})

export class WidgetsModule {
}
