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
				this.randomBlock = this.gallery[Math.floor(
					Math.random() * this.gallery.length
				)];
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}
}
