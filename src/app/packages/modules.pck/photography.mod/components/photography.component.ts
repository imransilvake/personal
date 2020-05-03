// angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

// app
import photography from 'src/assets/data/photography/photography';
import { faExpand, faPlane } from '@fortawesome/free-solid-svg-icons';
import { AppOptions, MemoryStorageItems } from '../../../../../app.config';
import { fadeInOut } from '../../../utilities.pck/accessories.mod/animations/fade-in-out.animation';
import { CardViewEnum } from '../../../utilities.pck/widgets.mod/enums/card-view.enum';
import { FirebaseService } from '../../../utilities.pck/common.mod/services/firebase.service';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { PushNotificationsTypesEnum } from '../../../frame.pck/enums/push-notifications-types.enum';
import { TriggersService } from '../../../utilities.pck/common.mod/services/triggers.service';

declare const lightGallery;

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss'],
	animations: [fadeInOut]
})

export class PhotographyComponent implements OnInit {
	@ViewChild('gallery', { static: false }) gallery: ElementRef;

	public faIcon = [faPlane, faExpand];
	public photography = photography;

	public cardViewImage = CardViewEnum.CARD_IMAGE;
	public sliderList = {};
	public sliderTotalSlides;
	public sliderInterval;
	public sliderImageActive;

	public galleryList = [];
	public isLoadMore = false;

	constructor(
		private _router: Router,
		private _firebaseService: FirebaseService,
		private _storageService: StorageService,
		private _triggersService: TriggersService
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
		const promiseData = photographyGalleries ?
			photographyGalleries : await this._firebaseService.storageGetPhotographyGallery();

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

			// initialize light gallery
			of(null)
				.pipe(delay(500))
				.subscribe(() => {
					if (!!this.gallery) {
						lightGallery(this.gallery.nativeElement);
					}
				});
		} else {
			// error: show push message
			this._triggersService.PushNotificationType
				.next(PushNotificationsTypesEnum.ERROR_GENERAL);
		}
	}

	/**
	 * format gallery data
	 * @param urlData
	 */
	public formatGalleryData(urlData) {
		const content = photography['items'].slice(this.galleryList.length);
		return urlData.map((url, index) => ({
			...content[index],
			photo: url
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
			this.sliderImageActive = this.sliderList['items'][0];
		} else {
			this.sliderList = { ...photography, items: this.sliderList['items'].concat(filteredData) };
		}
		this.sliderTotalSlides = this.sliderList['items'].length;
	}
}
