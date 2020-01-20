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
	/*
	{
		name: 'Code Section',
		link: `/${ROUTING.pages.codeSection}`
	},
	*/
	{
		name: 'Photography',
		link: `/${ROUTING.pages.photography}`
	}
];

export default navList;
