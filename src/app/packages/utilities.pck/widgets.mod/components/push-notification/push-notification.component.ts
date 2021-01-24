// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject, timer } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

// app
import pushNotifications from '../../../../../../assets/data/common/push-notifications';
import { slideFromLeftInOut } from '../../../accessories.mod/animations/slide-from-left-in-out.animation';
import { AppOptions, LocalStorageItems } from '../../../../../../app.config';
import { HelperService } from '../../../accessories.mod/services/helper.service';
import { StorageService } from '../../../../core.pck/storage.mod/services/storage.service';
import { PushNotificationService } from '../../services/push-notification.service';
import { PushNotificationsTypesEnum } from '../../../../frame.pck/enums/push-notifications-types.enum';
import { StorageTypeEnum } from '../../../../core.pck/storage.mod/enums/storage-type.enum';

@Component({
	selector: 'app-push-notification',
	templateUrl: './push-notification.component.html',
	styleUrls: ['./push-notification.component.scss'],
	animations: [slideFromLeftInOut]
})
export class PushNotificationComponent implements OnInit, OnDestroy {
	public validateNotificationsLength = true;
	public counter = [];
	public timer = [];
	public pushNotificationsList = pushNotifications;

	private unSubscribe = new Subject();

	constructor(
		private _storageService: StorageService,
		private _pushNotificationService: PushNotificationService
	) {}

	ngOnInit() {
		// welcome message
		of(null)
			.pipe(delay(1000))
			.subscribe(() => this.welcomeMessage());

		// listen: network connection
		HelperService.detectNetworkConnection()
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((res) => {
				// set active
				this.validateNotificationsLength = true;

				// update push notification list
				this.updateNotificationList(
					PushNotificationsTypesEnum.NETWORK_CONNECTION,
					res && res.type === 'offline'
				);
			});

		// listen: handle errors
		this._pushNotificationService.PushNotificationType.pipe(
			takeUntil(this.unSubscribe)
		).subscribe((type: PushNotificationsTypesEnum) => {
			// set active
			this.validateNotificationsLength = true;

			// update push notification list
			this.updateNotificationList(type, true);

			// add notification timer
			this.addNotificationTimer(type, AppOptions.intervals.welcome[2]);
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
		const welcome = this._storageService.get(
			LocalStorageItems.welcomePN,
			StorageTypeEnum.PERSISTANT
		);
		if (!welcome) {
			// update push notification list
			this.updateNotificationList(PushNotificationsTypesEnum.WELCOME, true);

			// add notification timer
			this.addNotificationTimer(
				PushNotificationsTypesEnum.WELCOME,
				AppOptions.intervals.welcome[2]
			);

			// update to local storage
			this._storageService.put(
				LocalStorageItems.welcomePN,
				'true',
				StorageTypeEnum.PERSISTANT
			);
		} else {
			// validate notifications container
			this.validateNotificationsContainer();
		}
	}

	/**
	 * validate notifications container
	 */
	public validateNotificationsContainer() {
		const items = this.pushNotificationsList.filter((f) => f.controls.show);
		this.validateNotificationsLength = !!(items && items.length);
	}

	/**
	 * add notification timer
	 *
	 * @param type
	 * @param interval
	 */
	public addNotificationTimer(type: PushNotificationsTypesEnum, interval: number) {
		// set counter
		this.counter[type] = interval;

		// reset particular timer
		if (this.timer[type]) {
			this.timer[type].unsubscribe();
		}

		// set timer
		this.timer[type] = timer(AppOptions.intervals.welcome[0], AppOptions.intervals.welcome[1])
			.pipe(takeUntil(this.unSubscribe))
			.subscribe((sec) => {
				// second
				const second = sec + 1;

				// set particular counter
				this.counter[type] = interval - second;

				// validate condition
				if (second === interval) {
					// close message
					// update push notification list
					this.updateNotificationList(type, false);

					// complete subscription
					this.timer[type].unsubscribe();
				}
			});
	}

	/**
	 * update notification list
	 *
	 * @param type
	 * @param status
	 */
	public updateNotificationList(type: PushNotificationsTypesEnum, status: boolean) {
		this.pushNotificationsList.map((item) => {
			if (item.id === type) {
				item.controls.show = status;
			}
			return item;
		});
	}
}
