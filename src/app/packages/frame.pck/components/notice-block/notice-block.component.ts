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
	public filteredNoticeBlock = noticeBlock.filter(x => x.show);
	public randomBlock = {};
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
				this.randomBlock = this.filteredNoticeBlock[Math.floor(
					Math.random() * this.filteredNoticeBlock.length
				)];
			});
	}
}
