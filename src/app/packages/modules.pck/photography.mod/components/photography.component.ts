// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// app
import photography from 'src/assets/data/photography/photography';
import { faCircleNotch, faExpand, faPlane } from '@fortawesome/free-solid-svg-icons';
import { AppOptions, MemoryStorageItems } from '../../../../../app.config';
import { fadeInOut } from '../../../utilities.pck/accessories.mod/animations/fade-in-out.animation';
import { CardViewEnum } from '../../../utilities.pck/widgets.mod/enums/card-view.enum';
import { FirebaseService } from '../../../utilities.pck/common.mod/services/firebase.service';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { PushNotificationsTypesEnum } from '../../../frame.pck/enums/push-notifications-types.enum';
import { TriggersService } from '../../../utilities.pck/common.mod/services/triggers.service';
import { PhotoGalleryService } from '../../../utilities.pck/widgets.mod/services/photo-gallery.service';
import { PhotoGalleryInterface } from '../../../utilities.pck/widgets.mod/interfaces/photo-gallery.interface';

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss'],
	animations: [fadeInOut]
})

export class PhotographyComponent implements OnInit {
	public faIcon = [faPlane, faExpand, faCircleNotch];
	public photography = photography;

	public cardViewImage = CardViewEnum.CARD_IMAGE;
	public sliderList = {};
	public sliderInterval;
	public sliderImageActive;

	public galleryList = [];
	public isLoadMore = false;
	public isLoader = false;

	constructor(
		private _router: Router,
		private _firebaseService: FirebaseService,
		private _storageService: StorageService,
		private _triggersService: TriggersService,
		private _photoGalleryService: PhotoGalleryService
	) {
	}

	ngOnInit() {
		// get photography galleries from memory (if exists)
		const photographyGalleries = this._storageService.get(
			MemoryStorageItems.photographyGalleries, StorageTypeEnum.MEMORY
		);

		// set page token taken from memory
		if (photographyGalleries) {
			this._firebaseService.photographyPageToken = photographyGalleries['isNextPageToken'];
		}

		// get photography gallery
		this.getPhotographyGallery(photographyGalleries).then();
	}

	/**
	 * get photography gallery
	 * @param photographyGalleries
	 */
	public async getPhotographyGallery(photographyGalleries?) {
		// start loading
		this.isLoader = true;

		// fetch data from memory or firebase
		const promiseData = photographyGalleries ?
			photographyGalleries : await this._firebaseService.storageGetPhotographyGallery();

		// validate data
		if (promiseData && promiseData['data']) {
			// gallery data
			const galleryData = photographyGalleries ? promiseData['data'] : await promiseData['data'];

			// get photography galleries from memory (if exists)
			const storedData = this._storageService.get(
				MemoryStorageItems.photographyGalleries, StorageTypeEnum.MEMORY
			);

			// save to memory
			// old + new: when old data is present + when user is not coming to photography route
			this._storageService.put(
				MemoryStorageItems.photographyGalleries,
				{
					data: storedData && !photographyGalleries ? storedData['data'].concat(galleryData) : galleryData,
					isNextPageToken: promiseData['isNextPageToken']
				},
				StorageTypeEnum.MEMORY
			);

			// formatted gallery data
			const galleryDataFormatted = this.formatGalleryData(galleryData);

			// update slider
			this.updateSlider(galleryDataFormatted);

			// update gallery
			this.galleryList.push(...galleryDataFormatted);

			// next page token
			this.isLoadMore = !!promiseData['isNextPageToken'];

			// stop loading
			this.isLoader = false;
		} else {
			// error: show push message
			this._triggersService.PushNotificationType
				.next(PushNotificationsTypesEnum.ERROR_GENERAL);

			// stop loading
			this.isLoader = false;
		}
	}

	/**
	 * format gallery data
	 * @param urlData
	 */
	public formatGalleryData(urlData) {
		// split different sizes images
		const minFiles = urlData.filter(i => i.indexOf('_min') !== -1);
		const thumbFiles = urlData.filter(i => i.indexOf('_thumb') !== -1);

		// map data according to photoGallery format
		const content = photography['items'].slice(this.galleryList.length);
		return minFiles.map((url, index) => ({
			...content[index],
			photo: url,
			thumbPhoto: thumbFiles[index]
		}));
	}

	/**
	 * update slider
	 * @param formattedData
	 */
	public updateSlider(formattedData) {
		// filter data
		const filteredData = formattedData.filter(i => !!i['slider']);

		// update slider values
		if (!this.sliderList['items']) {
			this.sliderList = { ...photography, items: filteredData };
			this.sliderInterval = AppOptions.intervals.photography;
		} else {
			this.sliderList = { ...photography, items: this.sliderList['items'].concat(filteredData) };
		}
	}

	/**
	 * open photo gallery
	 * @param item
	 * @param index
	 */
	public onClickOpenPhotoGallery(item: any, index: number) {
		// payload
		const payload: PhotoGalleryInterface = {
			show: true,
			currentIndex: index,
			items: this.galleryList
		};

		// trigger photo gallery
		this._photoGalleryService.triggerPhotoGallery.next(payload);
	}
}
