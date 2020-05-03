// angular
import { Component, Input } from '@angular/core';

// app
import { CardViewEnum } from '../../enums/card-view.enum';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html'
})

export class CardComponent {
	@Input() cardViewType = CardViewEnum.CARD_INFO;

	@Input() infoData;
	@Input() infoAssetsPath;
	@Input() infoAutoHeight = false;
	@Input() infoCardClass = true;

	@Input() noticeData;

	@Input() listData;
	@Input() filterRoute;

	@Input() imageData;

	@Input() codeData;
}
