// angular
import { Component } from '@angular/core';

// app
import { CardViewEnum } from '../../shared/widgets.mod/enums/card-view.enum';
import home from '../../../assets/data/home/home';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public home = home;
	public infoBoardData = home['sidebar']['infoBoard'];
	public infoBoardActiveSlide = home['sidebar']['infoBoard']['items'][0];
	public infoBoardTotalSlides = home['sidebar']['infoBoard']['items'].length;
	public cardViewList = CardViewEnum.CARD_LIST;

	/**
	 * open (website) external link
	 * @param link
	 * @param isMail
	 */
	public onClickOpenWebsite(link, isMail) {
		if (isMail) {
			window.open(link, '_self');
		} else {
			window.open(link, '_blank');
		}
	}
}
