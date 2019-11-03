// angular
import { Component } from '@angular/core';

// app
import socialLinks from 'src/assets/data/other/social-links';

@Component({
	selector: 'app-social-links',
	templateUrl: './social-links.component.html',
	styleUrls: ['./social-links.component.scss']
})

export class SocialLinksComponent {
	public socialLinks = socialLinks;
}
