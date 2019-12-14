// app
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
	{
		name: 'Github',
		icon: faGithub,
		link: 'https://github.com/imransilvake',
		extra: {
			type: 'icon',
			bg: false
		}
	},
	{
		name: 'Linkedin',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/imransilvake/',
		extra: {
			type: 'img',
			bg: true
		}
	},
	{
		name: 'Xing',
		icon: 'xing',
		link: 'https://www.xing.com/profile/Imran_Khan137',
		extra: {
			type: 'img',
			bg: false
		}
	}
];

export default socialLinks;
