// angular
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { interval, NEVER, Subject } from 'rxjs';

// app
import {
	faArrowLeft,
	faArrowRight,
	faDownload,
	faPauseCircle,
	faPlayCircle,
	faTimes
} from '@fortawesome/free-solid-svg-icons';
import { AppOptions } from '../../../../../../app.config';
import { SliderDirectionEnum } from '../../enums/slider-direction.enum';
import { SliderControlsEnum } from '../../enums/slider-controls.enum';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit, OnDestroy {
	@Output() closeSlider: EventEmitter<boolean> = new EventEmitter();
	@Output() updateActiveSlide: EventEmitter<any> = new EventEmitter();

	@Input() data;
	@Input() activeSlide;
	@Input() activeSlideIndex = 0;
	@Input() slideInterval = AppOptions.intervals.default;

	@Input() showSlideCounter = false;
	@Input() showDotsNavigation = false;
	@Input() dotsNavigationFixed = false;
	@Input() showArrowsNavigation = false;
	@Input() showControls = false;

	public faIcon = [
		faTimes, faDownload, faPlayCircle,
		faPauseCircle, faArrowLeft, faArrowRight,
	];
	public totalSlides;
	public slideCounter;
	public isSliderPlay = true;

	private slider: Subject<{ pause?: boolean, counter?: number }> = new Subject();
	private unSubscribe = new Subject();

	ngOnInit() {
		// count total slides
		this.totalSlides = this.data['items'].length;

		// slide counter
		this.slideCounter = `${this.activeSlideIndex + 1} / ${this.totalSlides}`;

		// set active slide
		this.activeSlide = this.data['items'][this.activeSlideIndex];
		this.updateActiveSlide.emit(this.activeSlide);

		// slider
		this.slider
			.pipe(
				takeUntil(this.unSubscribe),
				startWith({ pause: false, counter: 0 }),
				switchMap(state => state.pause ? NEVER :
					interval(this.slideInterval[0])
						.pipe(
							tap(() => {
								const slideIndex = this.activeSlideIndex < (this.totalSlides - 1) ?
									this.activeSlideIndex + 1 : 0;
								this.onClickChangeSlide(slideIndex, false);
							})
						)
				)
			)
			.subscribe();
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * change slide based on clicked index
	 * @param slideIndex
	 * @param isSwipeOrClick
	 */
	public onClickChangeSlide(slideIndex: number, isSwipeOrClick = false) {
		// on swipe or click
		if (isSwipeOrClick) {
			// reset slider interval
			this.resetSliderIntervalOnSlide();
		}

		// move to a specific slide
		this.activeSlide = this.data['items'][slideIndex];
		this.activeSlideIndex = slideIndex;

		// update active slide
		this.updateActiveSlide.emit(this.activeSlide);

		// update slide counter
		this.slideCounter = `${slideIndex + 1} / ${this.totalSlides}`;
	}

	/**
	 * on swipe: left and right
	 * @param direction
	 */
	public onSwipeOrClick(direction) {
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
		this.onClickChangeSlide(slideIndex, true);
	}

	/**
	 * pause slider interval
	 */
	public pauseSliderIntervalOnSlide() {
		// change icon
		this.isSliderPlay = false;

		// pause
		if (this.slider) {
			this.slider.next({ pause: true });
		}
	}

	/**
	 * resume slider interval
	 */
	public resumeSliderIntervalOnSlide() {
		// change icon
		this.isSliderPlay = true;

		// resume
		if (this.slider) {
			this.slider.next({ pause: false });
		}
	}

	/**
	 * reset slider interval
	 */
	public resetSliderIntervalOnSlide() {
		if (this.slider) {
			this.slider.next({ counter: 0 });
		}
	}

	/**
	 * trigger specific control
	 * @param control
	 */
	public onClickTriggerControl(control: SliderControlsEnum) {
		switch (control) {
			case SliderControlsEnum.CONTROL_EXIT:
				this.closeSlider.emit(true);
				break;
			case SliderControlsEnum.CONTROL_LEFT:
				this.onSwipeOrClick(SliderDirectionEnum.DIRECTION_RIGHT);
				break;
			case SliderControlsEnum.CONTROL_RIGHT:
				this.onSwipeOrClick(SliderDirectionEnum.DIRECTION_LEFT);
				break;
			case SliderControlsEnum.CONTROL_DOWNLOAD:
				window.open(this.activeSlide['photo'], '_blank');
				break;
			case SliderControlsEnum.CONTROL_PLAY:
				this.resumeSliderIntervalOnSlide();
				break;
			case SliderControlsEnum.CONTROL_PAUSE:
				this.pauseSliderIntervalOnSlide();
				break;
		}
	}
}
