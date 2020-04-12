// angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

// app
import { TranslateService } from '@ngx-translate/core';
import { ROUTING } from '../../../../../environments/environment';
import profileIntro from '../../../../../assets/data/profile/intro';

@Injectable({ providedIn: 'root' })
export class AppMetaService {
	public event404: Subject<boolean> = new Subject();

	public routing = ROUTING;
	public currentRoute;
	public authorName = profileIntro.name;

	constructor(
		private _router: Router,
		private _title: Title,
		private _meta: Meta,
		private _translate: TranslateService
	) {
		// listen: router events
		this._router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((route) => this.updateTitleOnNavigationChange(route));

		// listen: language change
		this._translate.onLangChange
			.subscribe((res) => {
				// update title
				if (this.currentRoute) {
					this.updateTitleOnNavigationChange(this.currentRoute, true);
				}

				// update meta information
				this.updateMetaInformationOnLanguageChange();

				// update html lang attribute
				this.updateHtmlLangAttribute(res);
			});

		// listen: 404 page
		this.event404
			.subscribe((isAllow) => {
				// robots
				this._meta.updateTag({
					name: 'robots',
					content: isAllow ? 'index, follow' : 'noindex, nofollow'
				});
			});
	}

	/**
	 * update title on navigation change
	 * @param route
	 * @param isLanguageChanged
	 */
	public updateTitleOnNavigationChange(route, isLanguageChanged = false) {
		// new route
		const newRoute = !isLanguageChanged ? route.url.split('/')[1] : route;

		// case: projects filters
		// case: language changed
		if (newRoute !== this.currentRoute || isLanguageChanged) {
			// update current route
			this.currentRoute = newRoute;

			// condition
			switch (newRoute) {
				case this.routing.pages.profile:
					const profile = this._translate.instant('Common.Meta.Title',
						{
							name: this.authorName,
							page: this._translate.instant('Common.Navigation.Profile')
						}
					);
					this._title.setTitle(profile);
					break;
				case this.routing.pages.projects:
					const projects = this._translate.instant('Common.Meta.Title',
						{
							name: this.authorName,
							page: this._translate.instant('Common.Navigation.Projects')
						}
					);
					this._title.setTitle(projects);
					break;
				case this.routing.pages.photography:
					const photography = this._translate.instant('Common.Meta.Title',
						{
							name: this.authorName,
							page: this._translate.instant('Common.Navigation.Photography')
						}
					);
					this._title.setTitle(photography);
					break;
				default:
					this._title.setTitle(this.authorName);
			}
		}
	}

	/**
	 * update meta information
	 */
	public updateMetaInformationOnLanguageChange() {
		// author
		this._meta.updateTag({
			name: 'author',
			content: this.authorName
		});

		// keywords
		this._meta.updateTag({
			name: 'keywords',
			content: this._translate.instant('Common.Meta.Keywords')
		});

		// description
		this._meta.updateTag({
			name: 'description',
			content: this._translate.instant('Common.Meta.Description', {
				name: this.authorName,
				designation: this._translate.instant('Common.Designations.Frontend'),
				developer: this._translate.instant('Common.Terms.Developer')
			})
		});
	}

	/**
	 * update html lang attribute
	 * @param res
	 */
	public updateHtmlLangAttribute(res) {
		const html = document.getElementsByTagName('html')[0];
		html.setAttribute('lang', res.lang);
	}
}
