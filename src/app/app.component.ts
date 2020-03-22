// angular
import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

// app
import { AppOptions } from '../app.config';
import { ScrollTopService } from './packages/utilities.pck/accessories.mod/services/scroll-top.service';
import { CardViewEnum } from './shared/widgets.mod/enums/card-view.enum';
import { routingAnimation } from './app-routing.animation';
import notifications from '../assets/data/other/notifications';

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
		<div [@routeAnimations]="routeAnimation && o && o.activatedRouteData && o.activatedRouteData['animation']">
			<router-outlet #o="outlet"></router-outlet>
		</div>

		<!-- Footer -->
		<app-footer></app-footer>

		<!-- Scroll Top -->
		<app-scroll-top></app-scroll-top>
	`,
	animations: [ routingAnimation ]
})

export class AppComponent {
	public routeAnimation = false;
	public cardViewNotice = CardViewEnum.CARD_NOTICE;
	public noticeList = { items: notifications['items'].filter(x => x.show) };
	public noticeActive = this.noticeList['items'][0];
	public noticeTotalSlides = this.noticeList['items'].length;
	public noticeInterval = AppOptions.intervals.notice;

	constructor(private _scrollTopService: ScrollTopService) {
		// init scroll top
		this._scrollTopService.scrollTopListener();

		// pause animation of app init
		of(null).pipe(delay(500)).subscribe(() => this.routeAnimation = true);
	}
}
