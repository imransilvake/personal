// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';

// app
import noticeBlock from '../../../../../assets/data/other/notice-block';
import { AppOptions } from '../../../../../app.config';

@Component({
	selector: 'app-notice-block',
	templateUrl: './notice-block.component.html',
	styleUrls: ['./notice-block.component.scss']
})

export class NoticeBlockComponent implements OnInit, OnDestroy {
	public filteredNoticeBlock = noticeBlock.filter(x => x.show);
	public randomBlock = {};
	public interval = new Subject();

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	ngOnInit() {
		this.interval
			.pipe(
				startWith(''),
				switchMap(() => timer(
					AppOptions.intervals.notice[0],
					AppOptions.intervals.notice[1]
				)),
				takeUntil(this._ngUnSubscribe)
			)
			.subscribe(() => {
				this.randomBlock = this.filteredNoticeBlock[Math.floor(
					Math.random() * this.filteredNoticeBlock.length
				)];
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}
}
