// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../shared.module';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { CardInfoComponent } from './components/card/info/card-info.component';
import { CardNoticeComponent } from './components/card/notice/card-notice.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		ReadMoreComponent,
		CodeBlockComponent,
		SliderComponent,
		CardComponent,
		CardInfoComponent,
		CardNoticeComponent
	],
	exports: [
		ReadMoreComponent,
		CodeBlockComponent,
		SliderComponent,
		CardComponent
	]
})

export class WidgetsModule {
}
