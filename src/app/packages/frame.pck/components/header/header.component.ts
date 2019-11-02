// angular
import { Component } from '@angular/core';

// app
import navList from 'src/assets/data/nav-list';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
	public navList = navList;
}
