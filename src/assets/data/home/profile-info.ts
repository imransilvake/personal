// app
import profileIntro from '../profile/intro';
import profileSummary from '../profile/summery';

const profileInfo = {
	summary: {
		display: {
			avatar: profileIntro.avatar,
			cover: profileIntro.cover
		},
		detail: {
			greetings: {
				text: {
					one: 'Home.Profile_Summary.Greetings.One',
					two: 'Home.Profile_Summary.Greetings.Two'
				},
				name: profileIntro.name
			},
			subTitle: profileIntro.subTitle,
			excerpt: profileSummary.description[0]
		}
	}
};
export default profileInfo;
