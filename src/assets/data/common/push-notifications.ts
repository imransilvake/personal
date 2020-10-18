// app
import { PushNotificationsTypesEnum } from '../../../app/packages/frame.pck/enums/push-notifications-types.enum';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const pushNotifications = [
	{
		id: PushNotificationsTypesEnum.NETWORK_CONNECTION,
		detail: {
			icon: faCircleNotch,
			title: 'Common.Push_Notifications.Messages.Network_Connection.Title',
			description: 'Common.Push_Notifications.Messages.Network_Connection.Description'
		},
		controls: {
			show: false,
			spin: true,
			error: true,
			allowClose: false
		}
	},
	{
		id: PushNotificationsTypesEnum.ERROR_GENERAL,
		detail: {
			icon: faTimesCircle,
			title: 'Common.Push_Notifications.Messages.Error_General.Title',
			description: 'Common.Push_Notifications.Messages.Error_General.Description'
		},
		controls: {
			show: false,
			spin: false,
			error: true,
			allowClose: true
		},
		buttons: [
			{
				text: 'Common.Push_Notifications.Buttons.Close',
				disabled: false
			},
			{
				text: 'Common.Push_Notifications.Buttons.Dismiss',
				disabled: true
			}
		]
	},
	{
		id: PushNotificationsTypesEnum.WELCOME,
		detail: {
			icon: faSmileBeam,
			title: 'Common.Push_Notifications.Messages.Welcome.Title',
			description: 'Common.Push_Notifications.Messages.Welcome.Description'
		},
		controls: {
			show: false,
			spin: false,
			error: false,
			allowClose: true
		},
		buttons: [
			{
				text: 'Common.Push_Notifications.Buttons.Close',
				disabled: false
			},
			{
				text: 'Common.Push_Notifications.Buttons.Dismiss',
				disabled: true
			}
		]
	}
];
export default pushNotifications;
