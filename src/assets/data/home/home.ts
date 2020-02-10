// app
import { AppLinks } from '../../../app.config';
import projects from '../projects/project';

const home = {
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
		title: 'Projects',
		githubProfile: projects.githubProfile,
		items: projects.items.filter(x => !!x.controls.recent)
	}
};

export default home;
