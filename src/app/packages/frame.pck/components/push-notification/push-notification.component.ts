// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
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
	styleUrls: ['./push-notification.component.scss']
})

export class PushNotificationComponent implements OnInit, OnDestroy {
	public animateIndex = -1;
	public counter = AppOptions.intervals.welcome[2];
	public pushNotificationsList = pushNotifications;

	private unSubscribe = new Subject();

	constructor(private _storageService: StorageService) {
	}

	ngOnInit() {
		// init welcome message
		this.initWelcomeMessage();

		// listen: network connection
		HelperService.detectNetworkConnection()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe(res => {
				if (res && res['type'] === 'offline') {
					// update push notification list
					this.updateNotificationList(PushNotificationsTypesEnum.NETWORK_CONNECTION, true);
				} else {
					// close message
					this.onClickRemoveMessage(PushNotificationsTypesEnum.NETWORK_CONNECTION, 1);
				}
			});
	}

	ngOnDestroy() {
		// remove subscriptions
		this.unSubscribe.next();
		this.unSubscribe.complete();
	}

	/**
	 * init welcome message
	 */
	public initWelcomeMessage() {
		// get welcomePushNotification from local storage
		const welcome = this._storageService.get(LocalStorageItems.welcomePN, StorageTypeEnum.PERSISTANT);
		if (!welcome) {
			// update push notification list
			this.updateNotificationList(PushNotificationsTypesEnum.WELCOME, true);

			// start timer
			const welcomeMessageTimer = timer(AppOptions.intervals.welcome[0], AppOptions.intervals.welcome[1])
				.pipe(takeUntil(this.unSubscribe))
				.subscribe((sec) => {
					// set counter
					this.counter = AppOptions.intervals.welcome[2] - (sec + 1);

					// validate condition
					if ((sec + 1) === AppOptions.intervals.welcome[2]) {
						// close message
						this.onClickRemoveMessage(PushNotificationsTypesEnum.WELCOME, 0);

						// complete subscription
						welcomeMessageTimer.unsubscribe();
					}
				});

			// update to local storage
			this._storageService.put(LocalStorageItems.welcomePN, 'true', StorageTypeEnum.PERSISTANT);
		}
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

	/**
	 * remove message from the notifications list after completing animation
	 * @param notificationId
	 * @param index
	 */
	public onClickRemoveMessage(notificationId: PushNotificationsTypesEnum, index: number) {
		// set animate index
		this.animateIndex = index;

		// delay 400ms to complete the animation
		of(null)
			.pipe(delay(400))
			.subscribe(() => {
				// update push notification list
				this.updateNotificationList(notificationId, false);

				// reset animate index
				this.animateIndex = -1;
			});
	}
}
