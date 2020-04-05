// app
import projects from '../projects/projects';

const topProjects = {
	title: 'Common.Terms.Top_Projects',
	items: projects.items.filter(x => !!x.controls.recent)
};
export default topProjects;
