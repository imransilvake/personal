// app
import { ROUTING } from '../../../environments/environment';
import projects from '../projects/projects';

const navigationBottom = [
	{
		name: 'Common.Navigation.Profile',
		link: ROUTING.profile
	},
	{
		name: 'Common.Navigation.Projects',
		link: ROUTING.projects,
		id: projects['filters'][0].id
	},
	{
		name: 'Common.Navigation.Photography',
		link: ROUTING.photography
	}
];
export default navigationBottom;
