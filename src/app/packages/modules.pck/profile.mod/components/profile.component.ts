// angular
import { Component } from '@angular/core';

// app
import * as moment from 'moment';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import profileIntro from '../../../../../assets/data/profile/intro';
import profileSummary from '../../../../../assets/data/profile/summery';
import profileSkills from '../../../../../assets/data/profile/skills';
import profileEducation from '../../../../../assets/data/profile/education';
import profileExperience from '../../../../../assets/data/profile/experience';
import profileLanguage from '../../../../../assets/data/profile/language';
import profileInterest from '../../../../../assets/data/profile/interest';
import html2canvas from 'html2canvas';

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
	public isDownloading = false;

	/**
	 * get time period
	 * @param period
	 */
	public getTP(period) {
		const start = HelperService.getDate(period[0]);
		const end = period.length === 1 ? '' : HelperService.getDate(period[1]);
		return end ? `${start} - ${end}` : start;
	}

	/**
	 * get time difference
	 * @param period
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

	/**
	 * display period
	 * @param period
	 */
	public displayPeriod(period, shortForm) {
		const year = period[0];
		const month = period[1];
		if (year > 0 && month > 0) {
			return shortForm ? `${year}Y ${month}M` :
				`${this.doPluralize(year, 'Year')} ${this.doPluralize(month, 'Month')}`;
		} else if (year > 0 && month === 0) {
			return shortForm ? `${year}Y` : `${this.doPluralize(year, 'Year')}`;
		} else {
			return shortForm ? `${month}M` : `${this.doPluralize(month, 'Month')}`;
		}
	}

	/**
	 * pluralize the given name based on counts
	 * @param count
	 * @param noun
	 * @param suffix
	 */
	public doPluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

	/**
	 * download resume
	 */
	public onClickDownloadResume() {
		// start downloading
		this.isDownloading = true;

		// prepare canvas
		html2canvas(document.querySelector('.ik-profile'))
			.then((canvas) => {
				// download resume
				const fakeLink = document.createElement('a');
				fakeLink.download = 'ik-resume.png';
				fakeLink.href = canvas.toDataURL('image/png');
				fakeLink.click();

				// stop loader
				this.isDownloading = false;
			});
	}
}
