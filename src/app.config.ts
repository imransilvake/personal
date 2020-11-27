// general
export const AppOptions = {
	languages: {
		en: 'en',
		de: 'de'
	},
	intervals: {
		default: [20000, 20000],
		infoBoard: [10000, 10000],
		notice: [10000, 10000],
		photography: [10000, 10000],
		welcome: [1000, 1000, 15]
	},
	config: {
		photography: {
			sliderItem: {
				originalLandscapeWidth: 5568,
				originalLandscapeHeight: 3712
			},
			gridItem: {
				originalLandscapeWidth: 800,
				originalLandscapeHeight: 533,
				originalPortraitWidth: 533,
				originalPortraitHeight: 738
			},
			container: { // scss framework
				widescreen: {
					limit: 1201,
					width: 1200 - 30
				},
				desktop: {
					limit: 993,
					width: 992 - 30
				}
			},
			breakPoints: { // grid layout
				columns3: 800,
				columns2: 550
			},
			extra: {
				padding: 30 + 30,
				gutterGap: 10
			}
		}
	}
};

// memory-storage items
export const MemoryStorageItems = {
	projectGalleries: 'ik-pr',
	photographyGalleries: 'ik-ph'
};

// local-storage items
export const LocalStorageItems = {
	themeColorMode: 'ik-c',
	fontSizeMode: 'ik-fs',
	languageMode: 'ik-l',
	welcomePN: 'ik-w'
};

// app links
export const AppLinks = {
	social: {
		github: 'https://github.com/imransilvake/',
		linkedin: 'https://linkedin.com/in/imransilvake/',
		email: 'imransilvake@gmail.com'
	},
	projects: {
		github: {
			profile: 'https://github.com/imransilvake/',
			list: {
				scss: {
					name: 'scss-framework',
					link: 'https://npmjs.com/package/@imransilvake/scss-framework'
				},
				slackClone: {
					name: 'slack-app-clone',
					link: 'https://slack-app-clone.netlify.app/'
				},
				imgurGallery: {
					name: 'imgur-gallery',
					link: 'https://imgur-gallery-app.netlify.app/'
				},
				weatherForecast: {
					name: 'weather-forecast',
					link: 'https://city-weather-forecast.netlify.app/'
				},
				currentWeather: {
					name: 'current-weather',
					link: 'https://city-current-weather.netlify.app/'
				},
				rssFeedParser: {
					name: 'rss-feed-parser',
					link: 'https://rss-feed-parser.netlify.app/'
				},
				takeAwayChallenge: {
					name: 'takeaway-challenge',
					link: 'https://takeaway-challenge.netlify.app/'
				},
				todo: {
					name: 'todo-hooks',
					link: 'https://todo-crud-app.netlify.app/'
				},
				ticTacToe: {
					name: 'tic-tac-toe',
					link: 'https://tic-tac-toe-xo.netlify.app/'
				},
				multiSiteSlider: {
					name: 'multisite-image-slider'
				}
			}
		}
	}
};

// firebase storage
export const FirebaseStorage = {
	projects: 'projects',
	photography: 'photography'
};
