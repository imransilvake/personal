// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { of, Subject, timer } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

// app
import { HelperService } from '../../../utilities.pck/accessories.mod/services/helper.service';
import { PushNotificationsTypesEnum } from '../../enums/push-notifications-types.enum';
import { StorageService } from '../../../core.pck/storage.mod/services/storage.service';
import { StorageTypeEnum } from '../../../core.pck/storage.mod/enums/storage-type.enum';
import { AppOptions, LocalStorageItems } from '../../../../../app.config';
import pushNotifications from '../../../../../assets/data/common/push-notifications';

@Component({
	selector: 'app-push-notification',
	templateUrl: './push-notification.component.html',
	styleUrls: ['./push-notification.component.scss'],
	animations: [
		trigger('slideInOut', [
			transition(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate(500, style({ transform: 'translateX(0)' }))
			]),
			transition(':leave', [
				animate(500, style({ transform: 'translateX(-100%)' }))
			])
		])
	]
})

export class PushNotificationComponent implements OnInit, OnDestroy {
	public validateNotificationsLength = true;
	public counter = AppOptions.intervals.welcome[2];
	public pushNotificationsList = pushNotifications;

	private unSubscribe = new Subject();

	constructor(private _storageService: StorageService) {
	}

	ngOnInit() {
		// welcome message
		of(null)
			.pipe(delay(1000))
			.subscribe(() => this.welcomeMessage());

		// listen: network connection
		HelperService.detectNetworkConnection()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(res => {
				// set active
				this.validateNotificationsLength = true;

				// update push notification list
				this.updateNotificationList(
					PushNotificationsTypesEnum.NETWORK_CONNECTION,
					res && res['type'] === 'offline'
				);
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * welcome message
	 */
	public welcomeMessage() {
		// get welcomePushNotification from local storage
		const welcome = this._storageService.get(LocalStorageItems.welcomePN, StorageTypeEnum.PERSISTANT);
		if (!welcome) {
			// add message
			// update push notification list
			this.updateNotificationList(PushNotificationsTypesEnum.WELCOME, true);

			// start timer
			const welcomeMessageTimer = timer(AppOptions.intervals.welcome[0], AppOptions.intervals.welcome[1])
				.pipe(takeUntil(this.unSubscribe))
				.subscribe((sec) => {
					// second
					const second = sec + 1;

					// set counter
					this.counter = AppOptions.intervals.welcome[2] - second;

					// validate condition
					if (second === AppOptions.intervals.welcome[2]) {
						// close message
						// update push notification list
						this.updateNotificationList(PushNotificationsTypesEnum.WELCOME, false);

						// complete subscription
						welcomeMessageTimer.unsubscribe();
					}
				});

			// update to local storage
			this._storageService.put(LocalStorageItems.welcomePN, 'true', StorageTypeEnum.PERSISTANT);
		}
	}

	/**
	 * validate notifications container
	 */
	public onValidateNotificationsLength() {
		const items = this.pushNotificationsList.filter(f => f.controls['show']);
		this.validateNotificationsLength = !!(items && items.length);
	}

	/**
	 * update notification list
	 * @param type
	 * @param status
	 */
	public updateNotificationList(type: PushNotificationsTypesEnum, status: boolean) {
		this.pushNotificationsList.map(item => {
			if (item.id === type) {
				item['controls']['show'] = status;
			}
			return item;
		});
	}
}
