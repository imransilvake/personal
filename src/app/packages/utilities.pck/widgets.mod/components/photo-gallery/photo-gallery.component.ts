// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import { AppOptions } from '../../../../../../app.config';
import { HelperService } from '../../../accessories.mod/services/helper.service';
import { PhotoGalleryService } from '../../services/photo-gallery.service';
import { PhotoGalleryInterface } from '../../interfaces/photo-gallery.interface';

@Component({
	selector: 'app-photo-gallery',
	templateUrl: './photo-gallery.component.html',
	styleUrls: ['./photo-gallery.component.scss']
})

export class PhotoGalleryComponent implements OnInit, OnDestroy {
	public showPhotoGallery = false;
	public imageLoaded = false;
	public dataList = {};
	public dataActive;
	public dataActiveSlideIndex = 0;
	public dataInterval = AppOptions.intervals.default;

	private unSubscribe = new Subject();

	constructor(
		private _helperService: HelperService,
		private _photoGalleryService: PhotoGalleryService
	) {
	}

	ngOnInit() {
		// listen: trigger photo gallery
		this._photoGalleryService.triggerPhotoGallery
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((payload: PhotoGalleryInterface) => {
				// stop html and body scroll
				this._helperService.stopHtmlAndBodyScroll();

				// show photo gallery
				this.showPhotoGallery = payload.show;

				// set slider data
				this.dataList = { items: payload.items };
				this.dataActiveSlideIndex = payload.currentIndex ? payload.currentIndex : 0;
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * close photo gallery
	 */
	public onClickClosePhotoGallery() {
		// reset photo gallery
		this.showPhotoGallery = false;

		// reset image loaded
		this.imageLoaded = false;

		// stop html and body scroll
		this._helperService.resetHtmlAndBodyScroll();
	}

	/**
	 * on image loaded
	 */
	public onLoadImage() {
		this.imageLoaded = true;
	}
}
