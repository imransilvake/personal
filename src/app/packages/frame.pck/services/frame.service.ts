// angular
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FrameService {
	public themeModeChange: Subject<any> = new Subject();
}
