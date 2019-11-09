// app
import { ROUTING } from '../../../environments/environment';

const navList = [
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
	},
	{
		name: 'Photography',
		link: `/${ROUTING.pages.photography}`
	}
];

export default navList;
