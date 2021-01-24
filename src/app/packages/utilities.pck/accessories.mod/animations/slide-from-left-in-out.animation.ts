// angular
import { trigger, transition, animate, style } from '@angular/animations';

export const slideFromLeftInOut = trigger('slideFromLeftInOut', [
	transition(':enter', [
		style({ transform: 'translateX(-100%)' }),
		animate(500, style({ transform: 'translateX(0)' }))
	]),
	transition(':leave', [animate(500, style({ transform: 'translateX(-100%)' }))])
]);
