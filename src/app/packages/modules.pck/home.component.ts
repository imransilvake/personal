// angular
import { Component } from '@angular/core';

// app
import homeIntro from '../../../assets/data/home/intro';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public overlayBG = 'url(assets/svg/bg-pattern.svg)';
	public faIcon = [faHeart, faEye];
	public homeIntro = homeIntro;
}
