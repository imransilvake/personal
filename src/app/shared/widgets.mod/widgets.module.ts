// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		ReadMoreComponent,
		CodeBlockComponent,
		CardComponent,
		SliderComponent
	],
	exports: [
		ReadMoreComponent,
		CodeBlockComponent,
		CardComponent,
		SliderComponent
	]
})

export class WidgetsModule {
}
