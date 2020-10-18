// angular
import { Component } from '@angular/core';

// app
import notice from '../assets/data/common/notice';
import { AppOptions } from '../app.config';
import { CardViewEnum } from './packages/utilities.pck/widgets.mod/enums/card-view.enum';
import { AppMetaService } from './packages/utilities.pck/accessories.mod/services/app-meta.service';

@Component({
	selector: 'app-root',
	template: `
		<div class="ik-app">
			<!-- Content -->
			<div class="ik-content">
				<!-- Notice Board -->
				<app-slider [data]="noticeList"
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
			</div>

			<!-- Footer -->
			<div class="ik-footer">
				<app-footer></app-footer>
			</div>
		</div>

		<!-- Scroll Top -->
		<app-scroll-top></app-scroll-top>

		<!-- Push Notification -->
		<app-push-notification></app-push-notification>

		<!-- Photo Gallery -->
		<app-photo-gallery></app-photo-gallery>
	`,
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	public cardViewNotice = CardViewEnum.CARD_NOTICE;
	public noticeList = { items: notice['items'].filter(x => x.show) };
	public noticeActive;
	public noticeInterval = AppOptions.intervals.notice;

	constructor(private _appMetaService: AppMetaService) {
	}
}
