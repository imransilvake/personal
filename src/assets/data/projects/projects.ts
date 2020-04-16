// app
import { AppLinks } from '../../../app.config';

const projects = {
	search: {
		placeholder: 'Projects.Terms.Search',
		empty: 'Projects.Empty_Result'
	},
	filters: [
		{
			id: 'all',
			text: 'Common.Terms.All'
		},
		{
			id: 'scss',
			text: 'SCSS'
		},
		{
			id: 'angular',
			text: 'Angular'
		},
		{
			id: 'react',
			text: 'React'
		},
		{
			id: 'php',
			text: 'PHP'
		}
	],
	items: [
		{
			title: 'SCSS Framework',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.SCSS'
				},
				tech: {
					label: 'Common.Terms.Technology',
					text: ['SCSS']
				}
			},
			badges: {
				code: 'SCSS'
			},
			controls: {
				lock: false,
				recent: true,
				filter: 'scss'
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.scss.name}`,
				website: AppLinks.projects.github.list.scss.link
			}
		},
		{
			title: 'Hotel App Manager',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.HAM'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'Angular',
				private: 'Projects.Terms.Private'
			},
			controls: {
				lock: true,
				recent: true,
				filter: 'angular'
			},
			actions: {
				galleryName: 'ham'
			}
		},
		{
			title: 'Hotel Guest App',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.HGA'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'Angular',
				private: 'Projects.Terms.Private'
			},
			controls: {
				lock: true,
				recent: true,
				filter: 'angular'
			},
			actions: {
				galleryId: 'hga'
			}
		},
		{
			title: 'Rabt Portal',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.RP'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'Angular',
				private: 'Projects.Terms.Private'
			},
			controls: {
				lock: true,
				recent: false,
				filter: 'angular'
			},
			actions: {
				galleryId: 'rabt-portal'
			}
		},
		{
			title: 'Hotel Staff App',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.HSA'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'NativeScript', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'NativeScript',
				private: 'Projects.Terms.Private'
			},
			controls: {
				lock: true,
				recent: false,
				filter: 'angular'
			},
			actions: {
				galleryId: 'hsa'
			}
		},
		{
			title: 'Slack App Clone',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.SAC'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next', 'React Color']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				lock: false,
				recent: true,
				filter: 'react'
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.slackClone.name}`,
				galleryId: 'slack-app-clone'
			}
		},
		{
			title: 'Takeaway Challenge',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.TC'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				lock: false,
				recent: true,
				filter: 'react'
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.takeAwayChallenge.name}`,
				galleryId: 'takeaway-challenge',
				website: AppLinks.projects.github.list.takeAwayChallenge.link
			}
		},
		{
			title: 'Tic-Tac-Toe',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.TTT'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				lock: false,
				recent: false,
				filter: 'react'
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.ticTacToe.name}`,
			}
		},
		{
			title: 'Multisite Image Slider',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.MIS'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'PHP', 'OXID Framework']
				}
			},
			badges: {
				code: 'PHP'
			},
			controls: {
				lock: false,
				recent: false,
				filter: 'php'
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.multiSiteSlider.name}`,
				galleryId: 'multisite-slider'
			}
		}
	]
};
export default projects;
