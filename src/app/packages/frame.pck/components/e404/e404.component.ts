// angular
import { Component } from '@angular/core';

// app
import page404 from '../../../../../assets/data/other/404';

@Component({
	selector: 'app-e404',
	templateUrl: './e404.component.html',
	styleUrls: ['./e404.component.scss']
})

export class E404Component {
	public page404 = page404;
}
