// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

// app
import { faExternalLinkSquareAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { ROUTING } from '../../../environments/environment';
import { AppOptions } from '../../../app.config';
import home from '../../../assets/data/home/home';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
	public faIcon = [faLock, faExternalLinkSquareAlt];
	public routing = ROUTING;
	public home = home;
	public totalSlides = home['infoBoard']['items'].length;
	public activeSlide = home['infoBoard']['items'][0];
	public activeSlideIndex = 0;

	private infoBoardSlider = new Subject();
	private unSubscribe = new Subject();

	ngOnInit() {
		// info board slider
		this.infoBoardSlider
			.pipe(
				takeUntil(this.unSubscribe),
				startWith(''),
				switchMap(() => timer(AppOptions.intervals.infoBoard[0], AppOptions.intervals.infoBoard[1]))
			)
			.subscribe(() => {
				const slideIndex = this.activeSlideIndex < (this.totalSlides - 1) ? this.activeSlideIndex + 1 : 0;
				this.onClickChangeSlide(slideIndex);
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * open (website) external link
	 * @param link
	 * @param isMail
	 */
	public onClickOpenWebsite(link, isMail) {
		if (isMail) {
			window.open(link, '_self');
		} else {
			window.open(link, '_blank');
		}
	}

	/**
	 * open github external link
	 * @param link
	 */
	public onClickOpenGithub(link) {
		window.open(`${this.home['projects']['githubProfile']}${link}`, '_blank');
	}

	/**
	 * change slide based on clicked index
	 * @param slideIndex
	 * @param slideItem
	 */
	public onClickChangeSlide(slideIndex: number, slideItem?: any) {
		// reset slider counter
		this.resetSliderCounterOnNavigationClick();

		// move to a specific slide
		const slides = home['infoBoard']['items'];
		this.activeSlide = slides[slideIndex];
		this.activeSlideIndex = slideIndex;
	}

	/**
	 * reset slider counter
	 */
	private resetSliderCounterOnNavigationClick() {
		if (this.infoBoardSlider) {
			this.infoBoardSlider.next(void 0);
		}
	}
}
