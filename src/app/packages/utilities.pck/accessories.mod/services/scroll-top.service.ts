// angular
import { EventEmitter, Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

// app
import { HelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class ScrollTopService {
	public scrollEvent: EventEmitter<any> = new EventEmitter();

	/**
	 * listener: scroll to top
	 */
	public scrollTopListener() {
		HelperService.detectScroll()
			.pipe(
				// we are only interested in the scrollY value of these events
				// let's create a stream with only these values
				map(() => window.scrollY),

				// only when the user stops scrolling for 200ms, we can continue
				// so let's debounce this stream for 200ms
				debounceTime(200)
			)
			.subscribe((scrollValue) => {
				this.scrollEvent.emit(scrollValue > 200);
			});
	}
}
