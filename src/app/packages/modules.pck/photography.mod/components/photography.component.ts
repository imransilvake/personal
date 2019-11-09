// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';

// app
import gallery from '../../../../../assets/data/photography/gallery';
import { AppOptions } from '../../../../../app.config';

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit, OnDestroy {
	public gallery = gallery;
	public randomBlock = {};
	public interval = new Subject();
	public counter = 10;

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	ngOnInit() {
		this.interval
			.pipe(
				startWith(''),
				switchMap(() => timer(
					AppOptions.intervals.photography[0],
					AppOptions.intervals.photography[1]
				))
			)
			.pipe(takeUntil(this._ngUnSubscribe))
			.subscribe(() => {
				this.counter = 10;
				this.randomBlock = this.gallery[Math.floor(
					Math.random() * this.gallery.length
				)];
			});

		// set 1 second interval
		setInterval(() => this.counter -= 1, 1000);
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}
}
