// angular
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-info',
	templateUrl: './card-info.component.html',
	styleUrls: ['./card-info.component.scss']
})

export class CardInfoComponent {
	@Input() infoData;
	@Input() infoAssetsPath;
	@Input() infoAutoHeight;
	@Input() infoCardClass;
}
