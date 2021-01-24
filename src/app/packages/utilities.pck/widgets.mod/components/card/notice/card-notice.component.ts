// angular
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-notice',
	templateUrl: './card-notice.component.html',
	styleUrls: ['./card-notice.component.scss']
})
export class CardNoticeComponent {
	@Input() noticeData;
}
