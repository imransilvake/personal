// angular
import { Component } from '@angular/core';

// app
import { CardViewEnum } from '../../shared/widgets.mod/enums/card-view.enum';
import profileInfo from '../../../assets/data/home/profile-info';
import profileSkills from '../../../assets/data/home/profile-skills';
import infoBoard from '../../../assets/data/home/info-board';
import socialNetwork from '../../../assets/data/home/social-network';
import topProjects from '../../../assets/data/home/top-projects';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public profileInfo = profileInfo;
	public profileSkills = profileSkills;
	public infoBoard = infoBoard;
	public socialNetwork = socialNetwork;
	public topProjects = topProjects;

	public infoBoardActiveSlide = infoBoard['items'][0];
	public infoBoardTotalSlides = infoBoard['items'].length;
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
