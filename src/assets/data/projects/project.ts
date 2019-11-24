const projects = {
	excerpt: 'Coding is fun',
	githubProfile: 'https://github.com/imransilvake/',
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
				github: 'SCSS-Framework'
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
				github: 'Slack-App-Clone',
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
				github: 'Takeaway-Challenge',
				gallery: [],
				website: 'https://takeaway-challenge.firebaseapp.com/'
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
				github: 'Tic-Tac-Toe',
				gallery: []
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
				github: 'Multisite-Image-Slider',
				gallery: []
			}
		}
	]
};

export default projects;
