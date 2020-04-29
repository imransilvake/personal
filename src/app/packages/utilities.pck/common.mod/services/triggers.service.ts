// angular
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// app
import { PushNotificationsTypesEnum } from '../../../frame.pck/enums/push-notifications-types.enum';

@Injectable({ providedIn: 'root' })
export class TriggersService {
	public PushNotificationType: Subject<PushNotificationsTypesEnum> = new Subject();
}
