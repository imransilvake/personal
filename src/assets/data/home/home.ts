// app
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { AppLinks } from '../../../app.config';
import projects from '../projects/project';
import profileSummary from '../profile/summery';
import profileIntro from '../profile/intro';

const home = {
	profile: {
		summary: {
			avatar: {
				photo: profileIntro.photo,
				cover: profileIntro.cover,
				name: profileIntro.name
			},
			detail: {
				name: profileIntro.name,
				title: profileIntro.title,
				subTitle: `I'M ${profileIntro.name}.`,
				greetings: `Hello`,
				excerpt: profileSummary.description[0]
			}
		},
	},
	social: {
		links: [
			{
				name: 'Github',
				img: 'github',
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
				link: `mailto:${AppLinks.social.email}`,
				isMail: true,
				class: 'ik-email'
			}
		]
	},
	projects: {
		title: 'Recent Work',
		githubProfile: projects.githubProfile,
		items: projects.items.filter(x => !!x.controls.recent)
	}
};
export default home;
