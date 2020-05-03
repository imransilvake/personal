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
	}
};

// memory-storage items
export const MemoryStorageItems = {
	projectGalleries: 'ik-pr',
	photographyGalleries: 'ik-ph'
}

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
					name: 'SCSS-Framework',
					link: 'https://npmjs.com/package/@imransilvake/scss-framework'
				},
				takeAwayChallenge: {
					name: 'Takeaway-Challenge',
					link: 'https://takeaway-challenge.firebaseapp.com/'
				},
				slackClone: { name: 'Slack-App-Clone' },
				ticTacToe: { name: 'Tic-Tac-Toe' },
				multiSiteSlider: { name: 'Multisite-Image-Slider' }
			}
		}
	}
};

// firebase storage
export const FirebaseStorage = {
	projects: 'projects',
	photography: 'photography'
}
