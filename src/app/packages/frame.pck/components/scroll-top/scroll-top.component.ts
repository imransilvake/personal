// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import { ScrollTopService } from '../../../utilities.pck/accessories.mod/services/scroll-top.service';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-scroll-top',
	templateUrl: './scroll-top.component.html',
	styleUrls: ['./scroll-top.component.scss']
})

export class ScrollTopComponent implements OnInit, OnDestroy {
	public faIcon = faArrowAltCircleUp;
	public showScroll = false;
	public scrollDuration = 300;

	private unSubscribe = new Subject();

	constructor(private _scrollTopService: ScrollTopService) {
	}

	ngOnInit() {
		// listen: scroll to top event
		this._scrollTopService.scrollEvent
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((status) => {
				this.showScroll = status === true;
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * move to top of the page
	 */
	public onClickScrollToTop() {
		const scrollStep = -window.scrollY / (this.scrollDuration / 15),
			scrollInterval = setInterval(() => {
				if (window.scrollY !== 0) {
					window.scrollBy(0, scrollStep);
				} else {
					clearInterval(scrollInterval);
				}
			}, 15);
	}
}
