// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

// app
import {
	faCamera,
	faCircleNotch,
	faCode,
	faDownload,
	faExternalLinkSquareAlt,
	faInfoCircle,
	faLock,
	faSearch,
	faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from 'src/assets/data/projects/projects';
import codeBlock from '../../../../../assets/data/projects/code-block';
import { ROUTING } from '../../../../../environments/environment';
import { MemoryStorageItems } from '../../../../../app.config';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';
import { PushNotificationsTypesEnum } from '../../../frame.pck/enums/push-notifications-types.enum';
import { CardViewEnum } from '../../../utilities.pck/widgets.mod/enums/card-view.enum';
import { FirebaseService } from '../../../utilities.pck/common.mod/services/firebase.service';
import { TriggersService } from '../../../utilities.pck/common.mod/services/triggers.service';
import { PhotoGalleryInterface } from '../../../utilities.pck/widgets.mod/interfaces/photo-gallery.interface';
import { PhotoGalleryService } from '../../../utilities.pck/widgets.mod/services/photo-gallery.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, OnDestroy {
	public faIcon = [
		faCode, faDownload, faLock, faInfoCircle, faGithub, faCamera,
		faTimesCircle, faExternalLinkSquareAlt, faSearch, faCircleNotch
	];
	public routing = ROUTING;
	public cardViewList = CardViewEnum.CARD_CODE;
	public codeBlock = codeBlock;
	public projects = projects;
	public infoBlockIndex = -1;
	public spinnerIndex = -1;
	public formFields;

	private unSubscribe = new Subject();

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _firebaseService: FirebaseService,
		private _storageService: StorageService,
		private _triggersService: TriggersService,
		private _photoGalleryService: PhotoGalleryService
	) {
		// listen: router events
		this._router.events
			.pipe(
				takeUntil(this.unSubscribe),
				filter(event => event instanceof NavigationEnd)
			)
			.subscribe(() => {
				// set filter based on path-param filter
				const ppFilter = _route.snapshot.params && _route.snapshot.params['filter'];
				const index = ppFilter && this.projects['filters'].findIndex(x => x.id === ppFilter);
				if (ppFilter && index !== -1) {
					this.onListenChangeFilter(this.projects['filters'][index]);
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
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(text => {
				let result;
				if (this.filter.value.id === projects['filters'][0].id) {
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
		this.unSubscribe.next();
		this.unSubscribe.complete();
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
	 * @param sFilter
	 */
	public onListenChangeFilter(sFilter) {
		// update data
		if (sFilter && sFilter.id !== projects['filters'][0].id) {
			const result = projects['items'].filter(x => x.controls.filter === sFilter.id);
			this.projects = { ...projects, items: result };
		} else {
			this.projects = projects;
		}

		// update filter
		this.filter.setValue(sFilter);

		// update search
		this.search.setValue(this.search.value);
	}

	/**
	 * download project from github
	 * @param link
	 */
	public onClickDownloadProject(link) {
		window.open(`${link}/archive/master.zip`, '_blank');
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
		window.open(`${link}`, '_blank');
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
	 * @param galleryId
	 * @param index
	 */
	public async onClickOpenProjectGallery(galleryId: string, index: number) {
		// start spinner
		this.spinnerIndex = index;

		// get project galleries from memory (if exists)
		const projectGalleries = this._storageService.get(
			MemoryStorageItems.projectGalleries, StorageTypeEnum.MEMORY
		);

		// get gallery list from firebase
		const galleryList = projectGalleries && projectGalleries[galleryId] ?
			projectGalleries[galleryId] : await this._firebaseService.storageGetProjectGallery(galleryId);

		// update project galleries in memory
		if (!(projectGalleries && projectGalleries[galleryId])) {
			// prepare payload
			const payload = {};
			payload[galleryId] = galleryList;

			// save to memory
			this._storageService.put(
				MemoryStorageItems.projectGalleries,
				{ ...projectGalleries, ...payload },
				StorageTypeEnum.MEMORY
			);
		}

		// stop spinner
		this.spinnerIndex = -1;

		// check if gallery list contains data
		if (galleryList && galleryList.length > 0) {
			// map data according to photoGallery format
			const galleryMapped = galleryList.map(item => ({ photo: item }));

			// open photo gallery
			this.openPhotoGallery(galleryMapped);
		} else {
			// error: show push message
			this._triggersService.PushNotificationType
				.next(PushNotificationsTypesEnum.ERROR_GENERAL);
		}
	}

	/**
	 * open photo gallery
	 * @param items
	 */
	public openPhotoGallery(items: any) {
		// payload
		const payload: PhotoGalleryInterface = {
			show: true,
			items
		};

		// trigger photo gallery
		this._photoGalleryService.triggerPhotoGallery.next(payload);
	}
}
