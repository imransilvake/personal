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
					subTitle: `I'M ${ profileIntro.name }.`,
					excerpt: profileSummary.description[0]
				}
			}
		},
		profileSkills: [
			{
				title: 'JavaScript Frameworks',
				items: [
					{
						photo: 'angular',
						items: [
							{
								title: 'Knowledge',
								items: [
									{
										name: 'Lifecycle Hooks'
									},
									{
										name: 'Routing and Navigation'
									},
									{
										name: 'Input and Outputs'
									},
									{
										name: 'Forms',
										items: [
											'Reactive Forms',
											'Validations (built-ins and custom)',
											'Dynamic Forms'
										]
									},
									{
										name: 'HttpClient',
										items: [
											'Error handling',
											'HTTP headers',
											'HTTP interceptors',
											'Logging',
											'Caching'
										]
									},
									{
										name: 'Observables and RxJs'
									},
									{
										name: 'Internationalization (i18n)'
									},
									{
										name: 'Services and Dependency Injection (DI)'
									},
									{
										name: 'Modules, Lazy-load Modules and Components'
									},
									{
										name: 'Pipes, Directives and Providers'
									},
									{
										name: 'Shared Module'
									},
									{
										name: 'App Deployment',
										items: [
											'AWS',
											'Firebase',
											'Netlify'
										]
									}
								]
							},
							{
								title: 'Learning & Improving',
								items: [
									{
										name: 'Animations'
									},
									{
										name: 'Directives'
									}
								]
							}
						]
					},
					{
						photo: 'react',
						items: [
							{
								title: 'Knowledge',
								items: [
									{
										name: 'Lifecycle Hooks'
									},
									{
										name: 'Routing and Navigation'
									},
									{
										name: 'States and Props'
									},
									{
										name: 'Internationalization (i18n)'
									},
									{
										name: 'App Deployment',
										items: [
											'AWS',
											'Firebase',
											'Netlify'
										]
									}
								]
							},
							{
								title: 'Learning & Improving',
								items: [
									{
										name: 'Hooks'
									},
									{
										name: 'Axios'
									}
								]
							}
						]
					}
				]
			},
			{
				title: 'Native Frameworks',
				items: [
					{
						photo: 'nativescript',
						items: [
							{
								title: 'Knowledge',
								items: [
									{
										name: 'Lifecycle Hooks'
									},
									{
										name: 'Routing and Navigation'
									},
									{
										name: 'Layout Containers',
										items: [
											'AbsoluteLayout',
											'DockLayout',
											'GridLayout',
											'StackLayout',
											'WrapLayout',
											'FlexboxLayout'
										]
									},
									{
										name: 'User Interface',
										items: [
											'ActionBar',
											'ActivityIndicator',
											'Animations',
											'Dialogs',
											'FormattedString',
											'Label',
											'Image',
											'HtmlView',
											'Progress',
											'SearchBar',
											'Switch',
											'ScrollView',
											'RadSideDrawer',
											'RadListView'
										]
									}
								]
							}
						]
					},
				]
			}
		]
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
					link: `mailto:${ AppLinks.social.email }`,
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
