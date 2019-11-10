// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import page404 from '../../../../../assets/data/other/404';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';

@Component({
	selector: 'app-e404',
	templateUrl: './e404.component.html',
	styleUrls: ['./e404.component.scss']
})

export class E404Component implements OnInit, OnDestroy {
	public page404 = page404;
	public x = '50%';
	public y = '50%';

	private _ngUnSubscribe: Subject<void> = new Subject<void>();

	ngOnInit() {
		HelperService.detectMouseMove()
			.pipe(takeUntil(this._ngUnSubscribe))
			.subscribe(event => {
				// event['pageX']: get horizontal coordinates of the mouse
				// window.innerWidth: browser width
				const x = event['pageX'] * 100 / window.innerWidth;

				// event['pageY']: vertical coordinates of the mouse
				// window.innerHeight: browser height
				const y = event['pageY'] * 100 / window.innerHeight;

				// left: x > 20
				// right: x > 80
				if (x > 20 && x < 80) {
					this.x = `${x}%`;
				}

				// top: y > 30
				// bottom: y > 60
				if (y > 30 && y < 60) {
					this.y = `${y}%`;
				}
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this._ngUnSubscribe.next();
		this._ngUnSubscribe.complete();
	}
}
