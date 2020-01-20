// app
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AppLinks } from '../../../app.config';

const socialLinks = [
	{
		name: 'Github',
		icon: faGithub,
		link: AppLinks.social.github,
		extra: {
			type: 'icon',
			bg: false
		}
	},
	{
		name: 'Linkedin',
		icon: 'linkedin',
		link: AppLinks.social.linkedin,
		extra: {
			type: 'img',
			bg: true
		}
	},
	{
		name: 'Xing',
		icon: 'xing',
		link: AppLinks.social.xing,
		extra: {
			type: 'img',
			bg: false
		}
	}
];

export default socialLinks;
