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
				one: 'Home.Profile_Summary.Greetings.One',
				two: 'Home.Profile_Summary.Greetings.Two'
			},
			name: profileIntro.name,
			designation: profileIntro.designation,
			excerpt: profileSummary.description[0]
		}
	}
};
export default profileInfo;
