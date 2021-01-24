// angular
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, startWith, debounceTime } from 'rxjs/operators';

// app
import photography from 'src/assets/data/photography/photography';
import { faCircleNotch, faExpand, faPlane } from '@fortawesome/free-solid-svg-icons';
import { AppOptions, MemoryStorageItems } from '../../../../../app.config';
import { fadeInOut } from '../../../utilities.pck/accessories.mod/animations/fade-in-out.animation';
import { FirebaseService } from '../../../utilities.pck/common.mod/services/firebase.service';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { PhotoGalleryService } from '../../../utilities.pck/widgets.mod/services/photo-gallery.service';
import { PhotoGalleryInterface } from '../../../utilities.pck/widgets.mod/interfaces/photo-gallery.interface';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import { PushNotificationService } from 'src/app/packages/utilities.pck/widgets.mod/services/push-notification.service';
import { PushNotificationsTypesEnum } from '../../../frame.pck/enums/push-notifications-types.enum';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss'],
	animations: [fadeInOut]
})
export class PhotographyComponent implements OnInit {
	public faIcon = [faPlane, faExpand, faCircleNotch];
	public photography = photography;
	public isPageLoaded = false;

	public sliderList = {};
	public sliderInterval;
	public sliderImageActive;

	public galleryList = [];
	public isLoadMore = false;
	public loadMoreLoader = false;

	public sliderItem = {};
	public gridItem = {};

	private unSubscribe = new Subject();

	constructor(
		private _firebaseService: FirebaseService,
		private _storageService: StorageService,
		private _pushNotificationService: PushNotificationService,
		private _photoGalleryService: PhotoGalleryService
	) {}

	ngOnInit() {
		// get photograhy slider and items list
		this.getCachedPhotographyGallery();

		// listen: window resize
		HelperService.detectWindowResize()
			.pipe(startWith(0), debounceTime(100), takeUntil(this.unSubscribe))
			.subscribe(() => {
				// calculate slider items properties
				this.calculateSliderItemsProperties();

				// calculate grid items properties
				this.calculateGridItemsProperties();
			});
	}

	/**
	 * get cached photography galleries from memory
	 */
	public getCachedPhotographyGallery() {
		// get photography galleries from memory (if exists)
		const photographyGalleries = this._storageService.get(
			MemoryStorageItems.photographyGalleries,
			StorageTypeEnum.MEMORY
		);

		// set page token taken from memory
		if (photographyGalleries) {
			this._firebaseService.photographyPageToken = photographyGalleries.isNextPageToken;
		}

		// get photography gallery
		this.getPhotographyGallery(photographyGalleries);
	}

	/**
	 * get photography gallery
	 *
	 * @param photographyGalleries
	 */
	public async getPhotographyGallery(photographyGalleries?) {
		// start loader
		this.loadMoreLoader = true;

		// fetch data from memory or firebase
		const promiseData = photographyGalleries
			? photographyGalleries
			: await this._firebaseService.storageGetPhotographyGallery();

		// validate data
		if (promiseData && promiseData.data) {
			// gallery data
			const galleryData = photographyGalleries ? promiseData.data : await promiseData.data;

			// get photography galleries from memory (if exists)
			const storedData = this._storageService.get(
				MemoryStorageItems.photographyGalleries,
				StorageTypeEnum.MEMORY
			);

			// save to memory
			// old + new: when old data is present + when user is not coming to photography route
			this._storageService.put(
				MemoryStorageItems.photographyGalleries,
				{
					data:
						storedData && !photographyGalleries
							? storedData.data.concat(galleryData)
							: galleryData,
					isNextPageToken: promiseData.isNextPageToken
				},
				StorageTypeEnum.MEMORY
			);

			// format photo slider + photo gallery
			const galleryDataFormatted = this.formatGalleryData(galleryData);

			// view: photo slider
			this.updateSlider(galleryDataFormatted);

			// view: photo gallery
			this.galleryList.push(...galleryDataFormatted);

			// validate more items
			this.isLoadMore = !!promiseData.isNextPageToken;
		} else {
			// error: show push message
			this._pushNotificationService.PushNotificationType.next(
				PushNotificationsTypesEnum.ERROR_GENERAL
			);
		}

		// stop loader
		this.loadMoreLoader = false;

		// page loaded
		this.isPageLoaded = true;
	}

	/**
	 * format gallery data
	 *
	 * @param urlData
	 */
	public formatGalleryData(urlData) {
		// split different sizes images
		const minFiles = urlData.filter((i) => i.indexOf('_min') !== -1);
		const thumbFiles = urlData.filter((i) => i.indexOf('_thumb') !== -1);

		// map data according to photoGallery format
		const content = photography.items.slice(this.galleryList.length);
		return minFiles.map((url, index) => ({
			...content[index],
			photo: url,
			thumbPhoto: thumbFiles[index],
			show: false
		}));
	}

	/**
	 * update slider
	 *
	 * @param formattedData
	 */
	public updateSlider(formattedData) {
		// filter data
		const filteredData = formattedData.filter((i) => !!i.slider);

		// update slider values
		if (!this.sliderList['items']) {
			this.sliderList = { ...photography, items: filteredData };
			this.sliderInterval = AppOptions.intervals.photography;
		} else {
			this.sliderList = {
				...photography,
				items: this.sliderList['items'].concat(filteredData)
			};
		}
	}

	/**
	 * open photo gallery
	 *
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

	/**
	 * calculate slider items properties
	 * properties: width and height
	 */
	public calculateSliderItemsProperties() {
		// config
		const config = AppOptions.config.photography;

		// screen_width
		const itemWidth = document.body.offsetWidth;

		// landscape: width & height
		const originalLandscapeWidth = config.sliderItem.originalLandscapeWidth;
		const originalLandscapeHeight = config.sliderItem.originalLandscapeHeight;

		// landscape: item_height
		// item_height = (original_height / original_width) x item_width
		const itemHeight = (originalLandscapeHeight / originalLandscapeWidth) * itemWidth;

		// assign values
		this.sliderItem['landscapeHeight'] = itemHeight < 500 ? itemHeight : 500;
	}

	/**
	 * calculate grid items properties
	 * properties: width and height
	 */
	public calculateGridItemsProperties() {
		// config
		const config = AppOptions.config.photography;

		// landscape and portrait: width & height
		const originalLandscapeWidth = config.gridItem.originalLandscapeWidth;
		const originalLandscapeHeight = config.gridItem.originalLandscapeHeight;
		const originalPortraitWidth = config.gridItem.originalPortraitWidth;

		// screen_width
		const screenWidth = document.body.offsetWidth;

		// container
		// screen_width >= 1201 -------> 1170
		// screen_width >= 993  -------> 962
		// screen_width < 993   -------> screen_width
		let containerWidth = screenWidth;
		if (screenWidth >= config.container.widescreen.limit) {
			containerWidth = config.container.widescreen.width;
		} else if (screenWidth >= config.container.desktop.limit) {
			containerWidth = config.container.desktop.width;
		}

		// total_items
		// 3 columns: 800 >= greater
		// 2 columns: 550 <-> 799
		// 1 column:  0 < 550
		const col2 = config.breakPoints.columns2;
		const col3 = config.breakPoints.columns3;
		const totalItems = screenWidth >= col3 ? 3 : screenWidth >= col2 ? 2 : 1;

		// padding && gutter_gap
		const padding = config.extra.padding;
		const gutterGap = screenWidth >= col2 ? config.extra.gutterGap : 0;

		// landscape: item_width && item_height
		// item_height = (original_height / original_width) x item_width
		const itemWidth = (containerWidth - padding - gutterGap) / totalItems;
		const itemHeight = (originalLandscapeHeight / originalLandscapeWidth) * itemWidth;

		// assign values
		this.gridItem['landscapeWidth'] = itemWidth;
		this.gridItem['landscapeHeight'] = itemHeight;
		this.gridItem['portraitWidth'] = originalPortraitWidth;
		this.gridItem['portraitHeight'] = itemHeight * 2 + gutterGap;
	}
}
