// app
import { ROUTING } from '../../../environments/environment';
import projects from '../projects/projects';

const navigationBottom = [
	{
		name: 'Common.Navigation.Profile',
		link: ROUTING.pages.profile
	},
	{
		name: 'Common.Navigation.Projects',
		link: ROUTING.pages.projects,
		id: projects['filters'][0].id
	},
	{
		name: 'Common.Navigation.Photography',
		link: ROUTING.pages.photography
	}
];
export default navigationBottom;
