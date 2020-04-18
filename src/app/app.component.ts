// angular
import { Component } from '@angular/core';

// app
import { AppOptions } from '../app.config';
import { CardViewEnum } from './shared/widgets.mod/enums/card-view.enum';
import { AppMetaService } from './packages/utilities.pck/accessories.mod/services/app-meta.service';
import notice from '../assets/data/common/notice';

@Component({
	selector: 'app-root',
	template: `
		<!-- Notice Board -->
		<app-slider [data]="noticeList"
					[activeSlide]="noticeActive"
					[totalSlides]="noticeTotalSlides"
					[slideInterval]="noticeInterval"
					[showDotsNavigation]="false"
					(updateActiveSlide)="noticeActive = $event">
			<app-card [cardViewType]="cardViewNotice"
					  [noticeData]="noticeActive">
			</app-card>
		</app-slider>

		<!-- Header -->
		<app-header></app-header>

		<!-- Router Outlet -->
		<router-outlet></router-outlet>

		<!-- Footer -->
		<app-footer></app-footer>

		<!-- Scroll Top -->
		<app-scroll-top></app-scroll-top>

		<!-- Push Notification -->
		<app-push-notification></app-push-notification>
	`
})

export class AppComponent {
	public cardViewNotice = CardViewEnum.CARD_NOTICE;
	public noticeList = { items: notice['items'].filter(x => x.show) };
	public noticeActive = this.noticeList['items'][0];
	public noticeTotalSlides = this.noticeList['items'].length;
	public noticeInterval = AppOptions.intervals.notice;

	constructor(private _appMetaService: AppMetaService) {
	}
}
