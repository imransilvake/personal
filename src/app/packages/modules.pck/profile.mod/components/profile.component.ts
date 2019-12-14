// angular
import { Component } from '@angular/core';

// app
import * as moment from 'moment';
import profileIntro from '../../../../../assets/data/profile/intro';
import profileSummary from '../../../../../assets/data/profile/summery';
import profileSkills from '../../../../../assets/data/profile/skills';
import profileEducation from '../../../../../assets/data/profile/education';
import profileExperience from '../../../../../assets/data/profile/experience';
import profileLanguage from '../../../../../assets/data/profile/language';
import profileInterest from '../../../../../assets/data/profile/interest';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
	public profileIntro = profileIntro;
	public profileSummary = profileSummary;
	public profileSkills = profileSkills;
	public profileEducation = profileEducation;
	public profileExperience = profileExperience;
	public profileLanguage = profileLanguage;
	public profileInterest = profileInterest;

	/**
	 * get time period
	 */
	public getTP(period) {
		const start = HelperService.getDate(period[0]);
		const end = period.length === 1 ? '' : HelperService.getDate(period[1]);
		return end ? `${start} - ${end}` : start;
	}

	/**
	 * get time difference
	 */
	public getTD(period) {
		// dates
		const start = HelperService.getDate(period[0]);
		const end = period.length === 1 ? moment() : HelperService.getDate(period[1]);
		const startM = moment(start, 'MMMM-YYYY');
		const endM = moment(end, 'MMMM-YYYY');

		// difference
		const diff = endM.add('1', 'month').diff(startM, 'months');
		const total = Math.round(diff);

		// month, year
		const months = total % 12;
		const years = Math.floor(total / 12);

		return [years, months];
	}
}
