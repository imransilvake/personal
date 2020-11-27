// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import { AppMetaService } from '../../../utilities.pck/accessories.mod/services/app-meta.service';
import page404 from '../../../../../assets/data/common/404';

@Component({
	selector: 'app-e404',
	templateUrl: './e404.component.html',
	styleUrls: ['./e404.component.scss']
})

export class E404Component implements OnInit, OnDestroy {
	public page404 = page404;
	public x = '50%';
	public y = '50%';

	private unSubscribe = new Subject();

	constructor(private _appMetaService: AppMetaService) {
	}

	ngOnInit() {
		// robots disallow
		this._appMetaService.event404.next(false);

		// listen: mouse movement
		HelperService.detectMouseMove()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(event => {
				// event['pageX']: get horizontal coordinates of the mouse
				// window.innerWidth: browser width
				const x = event && (event['pageX'] * 100 / window.innerWidth);

				// event['pageY']: vertical coordinates of the mouse
				// window.innerHeight: browser height
				const y = event && (event['pageY'] * 100 / window.innerHeight);

				// left: x > 20
				// right: x < 80
				if (x > 20 && x < 80) {
					this.x = `${x}%`;
				}

				// top: y > 30
				// bottom: y < 60
				if (y > 30 && y < 60) {
					this.y = `${y}%`;
				}

				// outside of view scope
				this.x = (x <= 20) ? `21%` : this.x;
				this.x = (x >= 80) ? `79%` : this.x;
				this.y = (y <= 30) ? `31%` : this.y;
				this.y = (y >= 60) ? `59%` : this.y;
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();

		// robots allow
		this._appMetaService.event404.next(true);
	}
}
