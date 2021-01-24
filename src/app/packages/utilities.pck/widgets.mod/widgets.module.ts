// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../../../shared.module';
import { PushNotificationComponent } from './components/push-notification/push-notification.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { CardInfoComponent } from './components/card/info/card-info.component';
import { CardNoticeComponent } from './components/card/notice/card-notice.component';
import { CardListComponent } from './components/card/list/card-list.component';
import { CardCodeComponent } from './components/card/code/card-code.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
	imports: [SharedModule],
	declarations: [
		PushNotificationComponent,
		PhotoGalleryComponent,
		SliderComponent,
		CardComponent,
		CardInfoComponent,
		CardNoticeComponent,
		CardListComponent,
		CardCodeComponent,
		LoaderComponent
	],
	exports: [
		PushNotificationComponent,
		PhotoGalleryComponent,
		SliderComponent,
		CardComponent,
		LoaderComponent
	]
})
export class WidgetsModule {}
