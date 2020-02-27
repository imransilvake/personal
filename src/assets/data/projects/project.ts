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
	items: [
		{
			title: 'SCSS Framework',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'SCSS Framework is a pure scss framework for building responsive, fast, robust, and adaptable web apps.'
				},
				tech: {
					label: 'Technology',
					text: ['SCSS']
				}
			},
			badge: 'SCSS',
			controls: {
				recent: true,
				filter: 'scss'
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.scss.name,
				website: AppLinks.projects.github.list.scss.link
			}
		},
		{
			title: 'Hotel App Manager',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'An admin portal to manage hotel chains by providing features such as User Management, Message Broadcast, Reports and much more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badge: 'Angular',
			controls: {
				recent: true,
				filter: 'angular'
			},
			actions: {
				lock: true,
				gallery: [
					{ src: '/assets/images/projects/ham/00a.png' },
					{ src: '/assets/images/projects/ham/00b.png' },
					{ src: '/assets/images/projects/ham/00c.png' },
					{ src: '/assets/images/projects/ham/01.png' },
					{ src: '/assets/images/projects/ham/02.png' },
					{ src: '/assets/images/projects/ham/02a.png' },
					{ src: '/assets/images/projects/ham/03.png' },
					{ src: '/assets/images/projects/ham/04.png' },
					{ src: '/assets/images/projects/ham/05.png' },
					{ src: '/assets/images/projects/ham/06.png' },
					{ src: '/assets/images/projects/ham/07.png' },
					{ src: '/assets/images/projects/ham/08.png' },
					{ src: '/assets/images/projects/ham/09.png' },
					{ src: '/assets/images/projects/ham/10.png' },
					{ src: '/assets/images/projects/ham/11.png' },
					{ src: '/assets/images/projects/ham/12.png' },
					{ src: '/assets/images/projects/ham/13.png' },
					{ src: '/assets/images/projects/ham/14.png' },
					{ src: '/assets/images/projects/ham/14a.png' },
					{ src: '/assets/images/projects/ham/15.png' },
					{ src: '/assets/images/projects/ham/16.png' },
					{ src: '/assets/images/projects/ham/17.png' },
					{ src: '/assets/images/projects/ham/18.png' },
					{ src: '/assets/images/projects/ham/19.png' },
					{ src: '/assets/images/projects/ham/20.png' },
					{ src: '/assets/images/projects/ham/21.png' },
					{ src: '/assets/images/projects/ham/22.png' },
					{ src: '/assets/images/projects/ham/23.png' },
					{ src: '/assets/images/projects/ham/24.png' },
					{ src: '/assets/images/projects/ham/25.png' },
					{ src: '/assets/images/projects/ham/26.png' },
					{ src: '/assets/images/projects/ham/27.png' },
					{ src: '/assets/images/projects/ham/28.png' },
					{ src: '/assets/images/projects/ham/29.png' },
					{ src: '/assets/images/projects/ham/30.png' },
					{ src: '/assets/images/projects/ham/31.png' },
					{ src: '/assets/images/projects/ham/32.png' },
					{ src: '/assets/images/projects/ham/33.png' },
					{ src: '/assets/images/projects/ham/34.png' }
				]
			}
		},
		{
			title: 'Hotel Guest App',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'While on stay in a hotel, guest can clean, send repair messages, view room key number and many other important details in an instant.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badge: 'Angular',
			controls: {
				recent: true,
				filter: 'angular'
			},
			actions: {
				lock: true,
				gallery: [
					{ src: '/assets/images/projects/hga/01.png' },
					{ src: '/assets/images/projects/hga/02.png' },
					{ src: '/assets/images/projects/hga/03.png' },
					{ src: '/assets/images/projects/hga/04.png' },
					{ src: '/assets/images/projects/hga/05.png' },
					{ src: '/assets/images/projects/hga/06.png' },
					{ src: '/assets/images/projects/hga/07.png' },
					{ src: '/assets/images/projects/hga/08.png' },
					{ src: '/assets/images/projects/hga/09.png' },
					{ src: '/assets/images/projects/hga/10.png' },
					{ src: '/assets/images/projects/hga/11.png' },
					{ src: '/assets/images/projects/hga/12.png' },
					{ src: '/assets/images/projects/hga/13.png' },
					{ src: '/assets/images/projects/hga/14.png' },
					{ src: '/assets/images/projects/hga/15.png' },
					{ src: '/assets/images/projects/hga/16.png' },
					{ src: '/assets/images/projects/hga/17.png' },
					{ src: '/assets/images/projects/hga/18.png' },
					{ src: '/assets/images/projects/hga/19.png' },
					{ src: '/assets/images/projects/hga/20.png' },
					{ src: '/assets/images/projects/hga/21.png' },
					{ src: '/assets/images/projects/hga/22.png' }
				]
			}
		},
		{
			title: 'Rabt Portal',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'An admin portal that provides features such as Creation of Pilgrims, Groups and Packages, Packages Report and more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badge: 'Angular',
			controls: {
				recent: false,
				filter: 'angular'
			},
			actions: {
				lock: true,
				gallery: [
					{ src: '/assets/images/projects/rabt-portal/01.png' },
					{ src: '/assets/images/projects/rabt-portal/02.png' },
					{ src: '/assets/images/projects/rabt-portal/03.png' },
					{ src: '/assets/images/projects/rabt-portal/04.png' },
					{ src: '/assets/images/projects/rabt-portal/05.png' },
					{ src: '/assets/images/projects/rabt-portal/05a.png' },
					{ src: '/assets/images/projects/rabt-portal/06.png' },
					{ src: '/assets/images/projects/rabt-portal/07.png' },
					{ src: '/assets/images/projects/rabt-portal/08.png' },
					{ src: '/assets/images/projects/rabt-portal/09.png' },
					{ src: '/assets/images/projects/rabt-portal/10.png' },
					{ src: '/assets/images/projects/rabt-portal/11.png' }
				]
			}
		},
		{
			title: 'Hotel Staff App',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'A hotel can view guest repair messages, room clean status and many more features without doing any physical effort.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'NativeScript', 'Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badge: 'NativeScript',
			controls: {
				recent: false,
				filter: 'angular'
			},
			actions: {
				lock: true,
				gallery: [
					{ src: '/assets/images/projects/hsa/01.png' },
					{ src: '/assets/images/projects/hsa/02.png' },
					{ src: '/assets/images/projects/hsa/03.png' },
					{ src: '/assets/images/projects/hsa/04.png' },
					{ src: '/assets/images/projects/hsa/05.png' },
					{ src: '/assets/images/projects/hsa/06.png' },
					{ src: '/assets/images/projects/hsa/07.png' },
					{ src: '/assets/images/projects/hsa/08.png' },
					{ src: '/assets/images/projects/hsa/08a.png' },
					{ src: '/assets/images/projects/hsa/09.png' },
					{ src: '/assets/images/projects/hsa/10.png' },
					{ src: '/assets/images/projects/hsa/11.png' },
					{ src: '/assets/images/projects/hsa/12.png' },
					{ src: '/assets/images/projects/hsa/13.png' },
					{ src: '/assets/images/projects/hsa/14.png' },
					{ src: '/assets/images/projects/hsa/15.png' },
					{ src: '/assets/images/projects/hsa/16.png' },
					{ src: '/assets/images/projects/hsa/17.png' }
				]
			}
		},
		{
			title: 'Slack App Clone',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Full-stack chat application (slack minimal) that provides Firbase Auth Signup & Signin, Real-time chatting and more.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next', 'React Color']
				}
			},
			badge: 'React',
			controls: {
				recent: true,
				filter: 'react'
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.slackClone.name,
				gallery: [
					{ src: '/assets/images/projects/slack-app-clone/01.png' },
					{ src: '/assets/images/projects/slack-app-clone/02.png' },
					{ src: '/assets/images/projects/slack-app-clone/03.png' },
					{ src: '/assets/images/projects/slack-app-clone/04.png' },
					{ src: '/assets/images/projects/slack-app-clone/05.png' },
					{ src: '/assets/images/projects/slack-app-clone/06.png' },
					{ src: '/assets/images/projects/slack-app-clone/07.png' },
					{ src: '/assets/images/projects/slack-app-clone/08.png' }
				]
			}
		},
		{
			title: 'Takeaway Challenge',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'A single and multiplayer game challenge given by Lieferando.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React', 'Material', 'Firebase', 'Redux', 'MomentJs', 'i18next']
				}
			},
			badge: 'React',
			controls: {
				recent: true,
				filter: 'react'
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.takeAwayChallenge.name,
				gallery: [
					{ src: '/assets/images/projects/takeaway-challenge/01.png' },
					{ src: '/assets/images/projects/takeaway-challenge/02.png' },
					{ src: '/assets/images/projects/takeaway-challenge/03.png' },
					{ src: '/assets/images/projects/takeaway-challenge/04.png' }
				],
				website: AppLinks.projects.github.list.takeAwayChallenge.link
			}
		},
		{
			title: 'Tic-Tac-Toe',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Tic-Tac-Toe game created for self-learning that also provides time travelling feature.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'React']
				}
			},
			badge: 'React',
			controls: {
				recent: false,
				filter: 'react'
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.ticTacToe.name
			}
		},
		{
			title: 'Multisite Image Slider',
			description: {
				excerpt: {
					label: 'Excerpt',
					text: 'A Multisite Image Slider build to handle company\'s multiple websites from a central place.'
				},
				tech: {
					label: 'Technologies',
					text: ['HTML5', 'CSS3', 'PHP', 'OXID Framework']
				}
			},
			badge: 'PHP',
			controls: {
				recent: false,
				filter: 'php'
			},
			actions: {
				lock: false,
				github: AppLinks.projects.github.list.multiSiteSlider.name,
				gallery: [
					{ src: '/assets/images/projects/multisite-slider/01.png' },
					{ src: '/assets/images/projects/multisite-slider/02.png' },
					{ src: '/assets/images/projects/multisite-slider/03.png' },
					{ src: '/assets/images/projects/multisite-slider/04.png' },
					{ src: '/assets/images/projects/multisite-slider/05.png' },
					{ src: '/assets/images/projects/multisite-slider/06.png' }
				]
			}
		}
	]
};
export default projects;
