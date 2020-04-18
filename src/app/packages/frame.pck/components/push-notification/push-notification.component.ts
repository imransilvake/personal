// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// app
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';

@Component({
	selector: 'app-push-notification',
	templateUrl: './push-notification.component.html',
	styleUrls: ['./push-notification.component.scss']
})

export class PushNotificationComponent implements OnInit, OnDestroy {
	public faIcons = [faCircleNotch];
	public isConnectionDown = false;
	private unSubscribe = new Subject();

	ngOnInit() {
		// listen: network connection
		HelperService.detectNetworkConnection()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(res => this.isConnectionDown = (res && res['type'] === 'offline'));
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}
}
