// angular
import { Component } from '@angular/core';

// app
import { ROUTING } from '../../../../../environments/environment';
import navList from 'src/assets/data/home/nav-list';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	public routing = ROUTING;
	public navList = navList;
}
