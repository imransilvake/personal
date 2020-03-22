// angular
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const slideLeft = [
	query(':enter, :leave',
		style({ position: 'fixed', width: '100%' }),
		{ optional: true }
	),
	group([
		query(':enter', [
				style({ transform: 'translateX(-100%)' }),
				animate('.5s ease', style({ transform: 'translateX(0%)' }))
			], { optional: true }
		),
		query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('.5s ease', style({ transform: 'translateX(100%)' }))
			], { optional: true }
		),
	])
];

const slideRight = [
	query(':enter, :leave',
		style({ position: 'fixed', width: '100%' }),
		{ optional: true }
	),
	group([
		query(':enter', [
				style({ transform: 'translateX(100%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }
		),
		query(':leave', [
				style({ transform: 'translateX(0%)' }),
				animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
			], { optional: true }
		),
	])
];

export const routingAnimation = trigger('routeAnimations', [
	transition('Home => *', slideRight),
	transition('* => Home', slideLeft),

	transition('Profile => *', slideRight),

	transition('Projects => Profile', slideLeft),
	transition('Projects => Photography', slideRight),

	transition('Photography => *', slideLeft)
]);
