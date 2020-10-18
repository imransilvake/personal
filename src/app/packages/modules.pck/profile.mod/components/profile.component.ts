// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

// app
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
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

export class ProfileComponent implements OnInit, OnDestroy {
	public profileIntro = profileIntro;
	public profileSummary = profileSummary;
	public profileSkills = profileSkills;
	public profileEducation = profileEducation;
	public profileExperience = profileExperience;
	public profileLanguage = profileLanguage;
	public profileInterest = profileInterest;

	private unSubscribe = new Subject();

	constructor(
		private _helperService: HelperService,
		private _translate: TranslateService
	) {
	}

	ngOnInit() {
		// listen: language change
		this._translate.onLangChange
			.pipe(
				startWith(0),
				takeUntil(this.unSubscribe)
			)
			.subscribe(() => this.initExperience());
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * init experience
	 */
	public initExperience() {
		this.profileExperience['experience'] = this.profileExperience['experience'].map(item => {
			const timePeriod = this.getTP(item['period']);
			const timeDifference = this.getTD(item['period']);
			return {
				...item,
				periodText: timePeriod,
				periodShort: this.displayPeriod(timeDifference, true),
				periodFull: this.displayPeriod(timeDifference, false),
				isYearAndMonth: timeDifference[0] > 0 && timeDifference[1] > 0
			};
		});
	}

	/**
	 * get time period
	 * @param period
	 */
	public getTP(period) {
		const start = this._helperService.getDate(period[0]);
		const end = period.length === 1 ? '' : this._helperService.getDate(period[1]);
		return end ? `${start} - ${end}` : start;
	}

	/**
	 * get time difference
	 * @param period
	 */
	public getTD(period) {
		// dates
		const start = this._helperService.getDate(period[0], null, false);
		const end = period.length === 1 ? moment() : this._helperService.getDate(period[1], null, false);
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
	 * @param shortForm
	 */
	public displayPeriod(period, shortForm) {
		const year = period[0];
		const month = period[1];
		if (year > 0 && month > 0) {
			return shortForm ? `${year}Y ${month}M` :
				`${this.doPluralize(year, this.profileExperience['period']['year'])}
				${this.doPluralize(month, this.profileExperience['period']['month'])}`;
		} else if (year > 0 && month === 0) {
			return shortForm ? `${year}Y` : `${this.doPluralize(year, this.profileExperience['period']['year'])}`;
		} else {
			return shortForm ? `${month}M` : `${this.doPluralize(month, this.profileExperience['period']['month'])}`;
		}
	}

	/**
	 * pluralize the given name based on counts
	 * @param count
	 * @param noun
	 * @param suffix
	 */
	public doPluralize = (count, noun, suffix = 's') =>
		`${count} ${this._translate.instant(noun)}${count !== 1 ? suffix : ''}`;
}
