// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../../../shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { CardInfoComponent } from './components/card/info/card-info.component';
import { CardNoticeComponent } from './components/card/notice/card-notice.component';
import { CardListComponent } from './components/card/list/card-list.component';
import { CardImageComponent } from './components/card/image/card-image.component';
import { CardCodeComponent } from './components/card/code/card-code.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		SliderComponent,
		CardComponent,
		CardInfoComponent,
		CardNoticeComponent,
		CardListComponent,
		CardImageComponent,
		CardCodeComponent
	],
	exports: [
		SliderComponent,
		CardComponent
	]
})

export class WidgetsModule {
}
