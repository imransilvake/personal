// app
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
				subTitle: `IM ${profileIntro.name}.`,
				greetings: `Hello`,
				excerpt: profileSummary.description[0]
			}
		},
	},
	social: {
		links: [
			{
				name: 'Github',
				icon: 'github',
				link: AppLinks.social.github,
				class: 'ik-github'
			},
			{
				name: 'Linkedin',
				icon: 'linkedin',
				link: AppLinks.social.linkedin,
				class: 'ik-linkedin'
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
