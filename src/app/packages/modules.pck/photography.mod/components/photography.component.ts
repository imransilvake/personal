// angular
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// app
import { faExpand, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { CardViewEnum } from '../../../../shared/widgets.mod/enums/card-view.enum';
import { AppOptions } from '../../../../../app.config';
import photography from 'src/assets/data/photography/photography';

declare const lightGallery;

@Component({
	selector: 'app-photography',
	templateUrl: './photography.component.html',
	styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements AfterViewInit {
	@ViewChild('gallery', { static: false }) gallery: ElementRef;

	public faIcon = [faSmileWink, faExpand];
	public photography = photography;
	public cardViewImage = CardViewEnum.CARD_IMAGE;
	public imageList = photography;
	public imageActive = photography['items'][0];
	public imageTotalSlides = photography['items'].length;
	public imageInterval = AppOptions.intervals.photography;

	constructor(private _router: Router) {
	}

	ngAfterViewInit() {
		// initialize light gallery
		if (!!this.gallery) {
			lightGallery(this.gallery.nativeElement);
		}
	}
}
