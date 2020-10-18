// app
import { AppLinks } from '../../../app.config';
import { ProjectsFiltersEnum } from '../../../app/packages/modules.pck/projects.mod/enums/projects-filters.enum';

const projects = {
	search: {
		placeholder: 'Projects.Terms.Search',
		empty: 'Projects.Empty_Result'
	},
	filters: [
		{
			id: ProjectsFiltersEnum.FILTER_ALL,
			text: 'Common.Terms.All'
		},
		{
			id: ProjectsFiltersEnum.FILTER_SCSS,
			text: 'SCSS'
		},
		{
			id: ProjectsFiltersEnum.FILTER_ANGULAR,
			text: 'Angular'
		},
		{
			id: ProjectsFiltersEnum.FILTER_REACT,
			text: 'React'
		},
		{
			id: ProjectsFiltersEnum.FILTER_PHP,
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
				recent: false,
				lock: false,
				showGallery: false,
				filter: ProjectsFiltersEnum.FILTER_SCSS
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
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'Angular Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'Angular',
				private: 'Projects.Terms.Private'
			},
			controls: {
				recent: false,
				lock: true,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_ANGULAR
			},
			actions: {
				galleryId: 'ham'
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
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'Angular Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'Angular',
				private: 'Projects.Terms.Private'
			},
			controls: {
				recent: false,
				lock: true,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_ANGULAR
			},
			actions: {
				galleryId: 'hga'
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
					text: ['HTML5', 'SCSS', 'TypeScript', 'Angular', 'NativeScript', 'Angular Material', 'MomentJs', 'RxJs', 'Store']
				}
			},
			badges: {
				code: 'NativeScript',
				private: 'Projects.Terms.Private'
			},
			controls: {
				recent: false,
				lock: true,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_ANGULAR
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
					text: ['HTML5', 'SCSS', 'React', 'Material-UI', 'Firebase', 'Redux', 'MomentJs', 'i18next', 'React Color']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: false,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.slackClone.name}`,
				galleryId: 'slack-app-clone',
				website: AppLinks.projects.github.list.slackClone.link
			}
		},
		{
			title: 'Imgur Gallery',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.IG'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Material-UI', 'Firebase', 'Redux', 'MomentJs', 'i18next', 'React Color']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: true,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.imgurGallery.name}`,
				galleryId: 'imgur-gallery',
				website: AppLinks.projects.github.list.imgurGallery.link
			}
		},
		{
			title: 'Weather Forecast',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.WF'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Redux Toolkit', 'TypeScript', 'Material-UI']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: true,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.weatherForecast.name}`,
				galleryId: 'weather-forecast',
				website: AppLinks.projects.github.list.weatherForecast.link
			}
		},
		{
			title: 'Current Weather',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.CW'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Redux Toolkit', 'Material-UI']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: true,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.currentWeather.name}`,
				galleryId: 'current-weather',
				website: AppLinks.projects.github.list.currentWeather.link
			}
		},
		{
			title: 'RSS Feed Parser',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.RFP'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Redux Toolkit', 'Material-UI']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: true,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.rssFeedParser.name}`,
				galleryId: 'rss-feed-parser',
				website: AppLinks.projects.github.list.rssFeedParser.link
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
					text: ['HTML5', 'SCSS', 'React', 'Material-UI', 'Firebase', 'Redux', 'MomentJs', 'i18next']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: false,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.takeAwayChallenge.name}`,
				galleryId: 'takeaway-challenge',
				website: AppLinks.projects.github.list.takeAwayChallenge.link
			}
		},
		{
			title: 'Todo Hooks',
			description: {
				excerpt: {
					label: 'Common.Terms.Excerpt',
					text: 'Projects.List.TODO'
				},
				tech: {
					label: 'Common.Terms.Technologies',
					text: ['HTML5', 'SCSS', 'React', 'Material-UI', 'Firebase']
				}
			},
			badges: {
				code: 'React'
			},
			controls: {
				recent: true,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.todo.name}`,
				galleryId: 'todo',
				website: AppLinks.projects.github.list.todo.link
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
				recent: false,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_REACT
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.ticTacToe.name}`,
				galleryId: 'tic-tac-toe',
				website: AppLinks.projects.github.list.ticTacToe.link
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
				recent: false,
				lock: false,
				showGallery: true,
				filter: ProjectsFiltersEnum.FILTER_PHP
			},
			actions: {
				link: `${AppLinks.projects.github.profile}${AppLinks.projects.github.list.multiSiteSlider.name}`,
				galleryId: 'multisite-slider'
			}
		}
	]
};
export default projects;
