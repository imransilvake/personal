// app
import profileIntro from '../profile/intro';
import profileSummary from '../profile/summery';

const profileInfo = {
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
};
export default profileInfo;
