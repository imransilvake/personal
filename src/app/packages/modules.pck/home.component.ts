// angular
import { Component } from '@angular/core';

// app
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public overlayBG = 'url(assets/images/space-pattern.png)';
	public faIcon = faHeart;
}
