// app
import { AppLinks } from '../../../app.config';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialNetwork = {
	items: [
		{
			name: 'Github',
			photo: 'github',
			link: AppLinks.social.github,
			class: 'ik-github'
		},
		{
			name: 'Linkedin',
			icon: faLinkedinIn,
			link: AppLinks.social.linkedin,
			class: 'ik-linkedin'
		},
		{
			name: 'Email',
			icon: faEnvelope,
			link: `mailto:${ AppLinks.social.email }`,
			class: 'ik-email',
			isMail: true
		}
	]
};
export default socialNetwork;
