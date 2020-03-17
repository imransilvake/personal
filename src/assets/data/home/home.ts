// app
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { AppLinks } from '../../../app.config';
import projects from '../projects/project';
import profileSummary from '../profile/summery';
import profileIntro from '../profile/intro';

const home = {
	content: {
		profileInfo: {
			summary: {
				avatar: {
					name: profileIntro.name,
					photo: profileIntro.photo,
					cover: profileIntro.cover
				},
				detail: {
					name: profileIntro.name,
					title: profileIntro.title,
					greetings: `Hello`,
					subTitle: `I'M ${profileIntro.name}.`,
					excerpt: profileSummary.description[0]
				}
			}
		},
		jsFrameworks: {
			photo: 'angular'
		}
	},
	sidebar: {
		infoBoard: {
			items: [
				{
					photo: 'office',
					detail: [
						{
							title: 'Company',
							items: [
								{
									name: 'TourismusSuite GmbH'
								}
							]
						},
						{
							title: 'Technologies',
							items: [
								{
									name: 'Angular'
								},
								{
									name: 'NativeScript'
								},
								{
									name: 'HTML5/CSS3 (SCSS)'
								}
							]
						}
					]
				},
				{
					photo: 'work',
					detail: [
						{
							title: 'Learning',
							items: [
								{
									name: 'NativeScript'
								},
								{
									name: 'React'
								}
							]
						},
						{
							title: 'Next',
							items: [
								{
									name: 'React Native'
								},
								{
									name: 'Flutter'
								}
							]
						}
					]
				},
				{
					photo: 'controller',
					detail: [
						{
							title: 'Playing',
							items: [
								{
									name: 'Horizon Zero Dawn'
								},
								{
									name: 'Assassin\'s Creed Origins'
								}
							]
						},
						{
							title: 'Next',
							items: [
								{
									name: 'Cyberpunk 2077'
								},
								{
									name: 'Read Dead Redemption 2'
								}
							]
						}
					]
				}
			]
		},
		social: {
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
					link: `mailto:${AppLinks.social.email}`,
					class: 'ik-email',
					isMail: true
				}
			]
		},
		projects: {
			githubProfile: projects.githubProfile,
			title: 'Recent Work',
			items: projects.items.filter(x => !!x.controls.recent)
		}
	}
};
export default home;
