// angular
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

// app
import { AppOptions } from '../../../../../app.config';
import { SliderViewEnum } from '../../enums/slider-view.enum';
import { SliderDirectionEnum } from '../../enums/slider-direction.enum';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, OnDestroy {
	@Input() viewType = SliderViewEnum.VIEW_INFO;
	@Input() data;
	@Input() activeSlide;
	@Input() totalSlides;

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
	 * change slide based on clicked index
	 * @param slideIndex
	 * @param slideItem
	 */
	public onClickChangeSlide(slideIndex: number, slideItem?: any) {
		// reset slider counter
		this.resetSliderCounterOnNavigationClick();

		// move to a specific slide
		this.activeSlide = this.data['items'][slideIndex];
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

	/**
	 * on swipe: left and right
	 * @param direction
	 */
	public onSwipe(direction) {
		let slideIndex;
		switch (direction) {
			case SliderDirectionEnum.DIRECTION_LEFT:
				slideIndex = this.activeSlideIndex < (this.totalSlides - 1) ? this.activeSlideIndex + 1 : 0;
				break;
			case SliderDirectionEnum.DIRECTION_RIGHT:
				slideIndex = this.activeSlideIndex === 0 ? (this.totalSlides - 1) : (this.activeSlideIndex - 1);
				break;
		}

		// change slide
		this.onClickChangeSlide(slideIndex);
	}
}
