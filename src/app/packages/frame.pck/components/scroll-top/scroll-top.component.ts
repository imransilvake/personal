// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';

// app
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';

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

	ngOnInit() {
		// listen: window scroll
		HelperService.detectWindowScroll()
			.pipe(
				// we are only interested in the scrollY value of these events
				// let's create a stream with only these values
				map(() => window.scrollY),

				// only when the user stops scrolling for 200ms, we can continue
				// so let's debounce this stream for 200ms
				debounceTime(200)
			)
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((scrollValue) => {
				this.showScroll = scrollValue > 200;
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
		const scrollDuration = this.scrollDuration / 15;
		const scrollStep = -window.scrollY / scrollDuration;
		const scrollInterval = setInterval(() => {
			if (window.scrollY !== 0) {
				window.scrollBy(0, scrollStep);
			} else {
				clearInterval(scrollInterval);
			}
		}, 15);
	}
}
