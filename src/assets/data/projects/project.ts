// app
import { AppLinks } from '../../../app.config';

const projects = {
	codeBlock: [
		{
			classes: ['ik-orange', 'ik-orange'],
			text: '<span>const</span> cup = <span>new</span> Cup(),'
		},
		{
			classes: ['ik-orange'],
			text: 'coffee = <span>new</span> Coffee(),'
		},
		{
			classes: [],
			text: 'ingredients = {'
		},
		{
			classes: ['ik-pink', 'ik-pink'],
			text: 'milk: <span>true</span>, sugar: <span>true</span>'
		},
		{
			classes: [],
			text: '};'
		},
		{
			classes: [],
			text: '<br>'
		},
		{
			classes: ['ik-orange', 'ik-green'],
			text: '<span>if</span> (cup.<span>empty</span>) {'
		},
		{
			classes: ['ik-green'],
			text: 'cup.<span>fill</span>(coffee, ingredients);'
		},
		{
			classes: ['ik-orange'],
			text: '} <span>else</span> {'
		},
		{
			classes: ['ik-green'],
			text: 'cup.<span>drink</span>();'
		},
		{
			classes: [],
			text: '}'
		}
	],
	githubProfile: AppLinks.projects.github.profile,
	filters: [
		{
			id: 'all',
			text: 'All'
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
	projects: [
		{
			filter: 'scss',
			title: 'SCSS Framework',
			class: 'ik-scss',
			badge: 'SCSS',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'SCSS Framework is a pure scss framework for building responsive, fast, robust, and adaptable web apps.'
				},
				tech: {
					label: 'Technology',
					text: ['SCSS']
				}
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.scss.name,
				website: AppLinks.projects.github.list.scss.link
			}
		},
		{
			filter: 'angular',
			title: 'Hotel App Manager',
			class: 'ik-js',
			badge: 'Angular',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'An admin portal to manage hotel chains by providing features such as User Management, Message Broadcast, Reports and much more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			actions: {
				lock: true,
				gallery: [
					{ src: '/assets/images/photography/01.jpg' },
					{ src: '/assets/images/photography/01.jpg' }
				]
			}
		},
		{
			filter: 'angular',
			title: 'Hotel Guest App',
			class: 'ik-js',
			badge: 'Angular',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'While on stay in a hotel, guest can clean, send repair messages, view room key number and many other important details in an instant.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			actions: {
				lock: true,
				gallery: []
			}
		},
		{
			filter: 'angular',
			title: 'Rabt Portal',
			class: 'ik-js',
			badge: 'Angular',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'An admin portal that provides features such as Creation of Pilgrims, Groups and Packages, Packages Report and more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			actions: {
				lock: true,
				gallery: []
			}
		},
		{
			filter: 'angular',
			title: 'Hotel Staff App',
			class: 'ik-js',
			badge: 'NativeScript',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'A hotel can view guest repair messages, room clean status and many more features without doing any physical effort.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'NativeScript', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			actions: {
				lock: true,
				gallery: []
			}
		},
		{
			filter: 'react',
			title: 'Slack App Clone',
			class: 'ik-js',
			badge: 'React',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Full-stack chat application (slack minimal) that provides Firbase Auth Signup & Signin, Real-time chatting and more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next', 'React Color']
				}
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.slackClone.name,
				gallery: []
			}
		},
		{
			filter: 'react',
			title: 'Takeaway Challenge',
			class: 'ik-js',
			badge: 'React',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'A single and multiplayer game challenge given by Lieferando.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next']
				}
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.takeAwayChallenge.name,
				gallery: [],
				website: AppLinks.projects.github.list.takeAwayChallenge.link
			}
		},
		{
			filter: 'react',
			title: 'Tic-Tac-Toe',
			class: 'ik-js',
			badge: 'React',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Tic-Tac-Toe game created for self-learning that also provides time travelling feature.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React']
				}
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.ticTacToe.name
			}
		},
		{
			filter: 'php',
			title: 'Multisite Image Slider',
			class: 'ik-php',
			badge: 'PHP',
			detail: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Multisite Image Slider build to handle company\'s multiple websites from a central place.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'PHP', 'OXID Framework']
				}
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.multiSiteSlider.name,
				gallery: []
			}
		}
	]
};

export default projects;
