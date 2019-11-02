// angular
import { Component } from '@angular/core';

// app
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
	public faIcon = faHeart;
}
