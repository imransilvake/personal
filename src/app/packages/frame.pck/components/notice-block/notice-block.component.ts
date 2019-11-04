// angular
import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

// app
import noticeBlock from '../../../../../assets/data/other/notice-block';
import { AppOptions } from '../../../../../app.config';

@Component({
	selector: 'app-notice-block',
	templateUrl: './notice-block.component.html',
	styleUrls: ['./notice-block.component.scss']
})

export class NoticeBlockComponent implements OnInit {
	public randomBlock = noticeBlock[Math.floor(Math.random() * noticeBlock.length)];
	public interval = new Subject();

	ngOnInit() {
		this.interval
			.pipe(
				startWith(''),
				switchMap(() => timer(
					AppOptions.intervals.notice[0],
					AppOptions.intervals.notice[1]
				))
			)
			.subscribe(() => {
				this.randomBlock = noticeBlock[Math.floor(Math.random() * noticeBlock.length)];
			});
	}
}
