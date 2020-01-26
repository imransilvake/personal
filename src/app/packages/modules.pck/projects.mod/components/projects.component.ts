// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import {
	faCode, faDownload, faExternalLinkSquareAlt,
	faImages, faInfoCircle, faLock, faSearch, faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from '../../../../../assets/data/projects/project';

declare const lightGallery: any;

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, OnDestroy {
	public projects = projects;
	public faIcon = [
		faCode, faDownload, faLock, faInfoCircle, faGithub,
		faImages, faTimesCircle, faExternalLinkSquareAlt, faSearch
	];
	public infoBlockIndex = -1;
	public formFields;

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	constructor() {
		// form group
		this.formFields = new FormGroup({
			search: new FormControl(''),
			filter: new FormControl('')
		});

		// set filter all by default
		this.filter.setValue(this.projects['filters'][0]);
	}

	ngOnInit() {
		// listen: search
		this.search.valueChanges
			.pipe(takeUntil(this._ngUnSubscribe))
			.subscribe(text => {
				let result;
				if (this.filter.value.id === 'all') {
					result = projects['projects']
						.filter(x =>
							x.title.toLowerCase().indexOf(text && text.toLowerCase()) !== -1
						);
				} else {
					result = projects['projects']
						.filter(x =>
							x.filter === this.filter.value.id &&
							x.title.toLowerCase().indexOf(text && text.toLowerCase()) !== -1
						);
				}
				this.projects = { ...projects, projects: result };
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
			const result = projects['projects'].filter(x => x.filter === filter.id);
			this.projects = { ...projects, projects: result };
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
	 * open website external link
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
