// angular
import { Component } from '@angular/core';

// app
import { faDownload, faLock } from '@fortawesome/free-solid-svg-icons';
import home from '../../../assets/data/home/home';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	public faIcon = [faLock, faDownload];
	public home = home;

	/**
	 * open (website) external link
	 * @param link
	 */
	public onClickOpenWebsite(link) {
		window.open(link, '_blank');
	}

	/**
	 * open github external link
	 * @param link
	 */
	public onClickOpenGithub(link) {
		window.open(`${this.home['projects']['githubProfile']}${link}`, '_blank');
	}
}
