// angular
import { ElementRef, EventEmitter, Output, Directive, AfterViewInit } from '@angular/core';

@Directive({ selector: '[LazyLoadImage]' })
export class LazyLoadImageDirective implements AfterViewInit {
	@Output() public lazyLoadImage: EventEmitter<any> = new EventEmitter();

	private _intersectionObserver?: IntersectionObserver;

	constructor(private _element: ElementRef) {
	}

	public ngAfterViewInit() {
		// intersection observer API
		this._intersectionObserver = new IntersectionObserver(entries => this.checkForIntersection(entries), {});

		// observe element
		this._intersectionObserver.observe(this._element.nativeElement);
	}

	/**
	 * check for element intersection
	 * @param entries
	 */
	private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
		entries.forEach((entry: IntersectionObserverEntry) => {
			if (this.isElementIntersecting(entry)) {
				// emit event
				this.lazyLoadImage.emit();

				// unobserve
				this._intersectionObserver.unobserve(this._element.nativeElement);

				// disconnect
				this._intersectionObserver.disconnect();
			}
		});
	}

	/**
	 * validate element intersaction on screen
	 * @param entry
	 */
	private isElementIntersecting(entry: IntersectionObserverEntry) {
		return entry.isIntersecting && entry.target === this._element.nativeElement;
	}
}
