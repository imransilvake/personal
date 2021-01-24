// angular
import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
	transition(':enter', [style({ opacity: '0' }), animate(500, style({ opacity: '1' }))]),
	transition(':leave', [animate(500, style({ opacity: '0' }))])
]);
