// angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

// app
import photography from 'src/assets/data/photography/photography';
import { faExpand, faPlane } from '@fortawesome/free-solid-svg-icons';
import { AppOptions } from '../../../../../app.config';
import { fadeInOut } from '../../../utilities.pck/accessories.mod/animations/fade-in-out.animation';
import { CardViewEnum } from '../../../utilities.pck/widgets.mod/enums/card-view.enum';
import { FirebaseService } from '../../../utilities.pck/common.mod/services/firebase.service';

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
	public excerpt = photography['excerpt'];

	public cardViewImage = CardViewEnum.CARD_IMAGE;
	public sliderList = {};
	public sliderTotalSlides;
	public sliderInterval;
	public sliderImageActive;

	public galleryList = [];
	public isLoadMore = true;

	constructor(
		private _router: Router,
		private _firebaseService: FirebaseService
	) {
	}

	ngOnInit() {
		// get photography gallery
		this.getPhotographyGallery().then();
	}

	/**
	 * get photography gallery
	 */
	public async getPhotographyGallery() {
		const promiseData: any = await this._firebaseService.storageGetPhotographyGallery();

		// gallery data
		const galleryData = await promiseData['data'];

		// formatted gallery data
		const galleryDataFormatted = this.formatGalleryData(galleryData);

		// update slider
		this.updateSlider(galleryDataFormatted);

		// update gallery
		this.galleryList.push(...galleryDataFormatted);

		// next page token
		this.isLoadMore = !!promiseData['isNextPageToken'];

		// initialize light gallery
		of(null).pipe(delay(500))
			.subscribe(() => {
				if (!!this.gallery) {
					lightGallery(this.gallery.nativeElement);
				}
			});
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

		// set slider
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
