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
		const start = moment(period[0], 'MM-YYYY').format('MMM YYYY');
		const end = period.length === 1 ? '' : moment(period[1], 'MM-YYYY').format('MMM YYYY');
		return end ? `${start} - ${end}` : start;
	}

	/**
	 * get time difference
	 */
	public getTD(period) {
		const start = moment(period[0], 'MM-YYYY');
		const end = period.length === 1 ? moment() : moment(period[1], 'MM-YYYY');
		const total = Math.round(moment(end).diff(start, 'months')) + 1;

		const months = total % 12;
		const years = Math.floor(total / 12);
		return [years, months];
	}
}
