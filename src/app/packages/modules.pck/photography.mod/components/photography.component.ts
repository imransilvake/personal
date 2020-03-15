// angular
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

// app
import { AppOptions } from '../../../../../app.config';
import { faExpand, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import photography from '../../../../../assets/data/photography/gallery';

declare const lightGallery: any;

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('gallerySelector', { static: false }) gallerySelector: ElementRef;

	public faIcon = [faSmileWink, faExpand];
	public photography = {};
	public randomBlock = {};
	public counter = 10;

	private photographySlider = new Subject();
	private unSubscribe = new Subject();

	constructor(private _router: Router) {
		// listen: router event
		this._router.events
			.pipe(
				takeUntil(this.unSubscribe),
				filter(event => event instanceof NavigationEnd)
			)
			.subscribe(() => this.photography = photography);
	}

	ngOnInit() {
		this.photographySlider
			.pipe(
				takeUntil(this.unSubscribe),
				startWith(''),
				switchMap(() => timer(
					AppOptions.intervals.photography[0],
					AppOptions.intervals.photography[1]
				))
			)
			.subscribe(() => {
				// counter
				this.counter = 10;

				// random slide
				this.randomBlock = this.photography['gallery'][Math.floor(
					Math.random() * this.photography['gallery'].length
				)];
			});

		// set 1 second interval
		setInterval(() => this.counter -= 1, 1000);
	}

	ngAfterViewInit() {
		// initialize light gallery
		if (!!this.gallerySelector) {
			lightGallery(this.gallerySelector.nativeElement);
		}
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}
}
