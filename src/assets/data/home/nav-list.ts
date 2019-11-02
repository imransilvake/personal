// app
import { ROUTING } from '../../../environments/environment';

const navList = [
	{
		name: 'Home',
		link: `/${ROUTING.pages.home}`
	},
	{
		name: 'Profile',
		link: `/${ROUTING.pages.profile}`
	},
	{
		name: 'Projects',
		link: `/${ROUTING.pages.projects}`
	},
	{
		name: 'Blog',
		link: `/${ROUTING.pages.blog}`
	}
];

export default navList;
