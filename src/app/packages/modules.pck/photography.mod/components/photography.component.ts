// angular
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { filter, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

// app
import photography from '../../../../../assets/data/photography/gallery';
import { AppOptions } from '../../../../../app.config';
import { faExpand, faSmileWink } from '@fortawesome/free-solid-svg-icons';

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
	public interval = new Subject();
	public counter = 10;

	private unSubscribe: Subject<void> = new Subject<void>();

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
		this.interval
			.pipe(
				startWith(''),
				switchMap(() => timer(
					AppOptions.intervals.photography[0],
					AppOptions.intervals.photography[1]
				))
			)
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(() => {
				this.counter = 10;
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
