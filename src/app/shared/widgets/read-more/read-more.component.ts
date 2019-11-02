// angular
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-read-more',
	templateUrl: './read-more.component.html',
	styleUrls: ['./read-more.component.scss']
})

export class ReadMoreComponent {
	@Input() fullText;
	@Input() truncateSize = 200;

	public isCollapsed = false;
}
