// angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// app
import page404 from '../../../../../assets/data/other/404';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';

@Component({
	selector: 'app-e404',
	templateUrl: './e404.component.html',
	styleUrls: ['./e404.component.scss']
})

export class E404Component implements OnInit {
	@ViewChild('eye', { static: false }) eye: ElementRef;

	public page404 = page404;
	public x;
	public y;

	ngOnInit() {
		HelperService.detectMouseMove()
			.subscribe(event => {
				// event['pageX']: get horizontal coordinates of the mouse
				// window.innerWidth: browser width
				this.x = event['pageX'] * 100 / window.innerWidth + '%';

				// event['pageY']: vertical coordinates of the mouse
				// window.innerHeight: browser height
				this.y = event['pageY'] * 100 / window.innerHeight + '%';
			});
	}
}
