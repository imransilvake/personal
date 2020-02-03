// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// app
import {
	faCode, faDownload, faExternalLinkSquareAlt,
	faImages, faInfoCircle, faLock, faSearch, faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ROUTING } from '../../../../../environments/environment';
import projects from '../../../../../assets/data/projects/project';

declare const lightGallery: any;

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, OnDestroy {
	public faIcon = [faCode, faDownload, faLock, faInfoCircle, faGithub, faImages, faTimesCircle, faExternalLinkSquareAlt, faSearch];
	public routing = ROUTING;
	public projects = projects;
	public infoBlockIndex = -1;
	public formFields;

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	) {
		// listen: router event
		this._router.events
			.pipe(
				takeUntil(this._ngUnSubscribe),
				filter(event => event instanceof NavigationEnd)
			)
			.subscribe(() => {
				// set filter based on path-param filter
				const ppFilter = _route.snapshot.params && _route.snapshot.params['filter'];
				const index = ppFilter && this.projects['filters'].findIndex(x => x.id === ppFilter);
				if (ppFilter && index !== -1) {
					this.onClickChangeFilter(this.projects['filters'][index]);
				}
			});

		// form group
		this.formFields = new FormGroup({
			search: new FormControl(''),
			filter: new FormControl(this.projects['filters'][0])
		});
	}

	ngOnInit() {
		// listen: search
		this.search.valueChanges
			.pipe(takeUntil(this._ngUnSubscribe))
			.subscribe(text => {
				let result;
				if (this.filter.value.id === 'all') {
					result = projects['items'].filter(x => x.title.toLowerCase().indexOf(text && text.toLowerCase()) !== -1);
				} else {
					result = projects['items']
						.filter(x =>
							x.controls.filter === this.filter.value.id &&
							x.title.toLowerCase().indexOf(text && text.toLowerCase()) !== -1
						);
				}
				this.projects = { ...projects, items: result };
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}

	/**
	 * getters
	 */
	get search() {
		return this.formFields.get('search');
	}

	get filter() {
		return this.formFields.get('filter');
	}

	/**
	 * set selected filter
	 * @param filter
	 */
	public onClickChangeFilter(filter) {
		// clear search
		this.search.setValue('');

		// update filter
		this.filter.setValue(filter);

		// update data
		if (filter && filter.id !== 'all') {
			const result = projects['items'].filter(x => x.controls.filter === filter.id);
			this.projects = { ...projects, items: result };
		} else {
			this.projects = projects;
		}
	}

	/**
	 * download project from github
	 * @param link
	 */
	public onClickDownloadProject(link) {
		window.open(`${this.projects['githubProfile']}${link}/archive/master.zip`, '_blank');
	}

	/**
	 * toggle info block
	 * @param idx
	 */
	public onClickToggleInfoBlock(idx) {
		if (this.infoBlockIndex === idx) {
			this.infoBlockIndex = (this.infoBlockIndex === -1) ? idx : -1;
		} else {
			this.infoBlockIndex = idx;
		}
	}

	/**
	 * open github external link
	 * @param link
	 */
	public onClickOpenGithub(link) {
		window.open(`${this.projects['githubProfile']}${link}`, '_blank');
	}

	/**
	 * open (website) external link
	 * @param link
	 */
	public onClickOpenWebsite(link) {
		window.open(link, '_blank');
	}

	/**
	 * open specific project gallery
	 * @param projectGallery
	 * @param index
	 */
	public onClickOpenProjectGallery(projectGallery: Array<string>, index: number) {
		lightGallery(document.querySelector(`#gallery-${index}`), {
			dynamic: true,
			dynamicEl: projectGallery
		});
	}
}
