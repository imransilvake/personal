// angular
import { Component } from '@angular/core';

// app
import profileInfo from '../../../assets/data/home/profile-info';
import profileSkills from '../../../assets/data/home/profile-skills';
import infoBoard from '../../../assets/data/home/info-board';
import socialNetwork from '../../../assets/data/home/social-network';
import topProjects from '../../../assets/data/home/top-projects';
import { ROUTING } from '../../../environments/environment';
import { AppOptions } from '../../../app.config';
import { CardViewEnum } from '../utilities.pck/widgets.mod/enums/card-view.enum';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public routing = ROUTING;
	public profileInfo = profileInfo;
	public profileSkills = profileSkills;
	public socialNetwork = socialNetwork;
	public topProjects = topProjects;

	public cardViewList = CardViewEnum.CARD_LIST;
	public infoBoard = infoBoard;
	public infoBoardActiveSlide;
	public infoBoardInterval = AppOptions.intervals.infoBoard;

	/**
	 * open (website) external link
	 *
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
