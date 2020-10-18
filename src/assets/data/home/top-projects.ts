// app
import projects from '../projects/projects';

const topProjects = {
	title: 'Common.Terms.Recent_Projects',
	items: projects.items.filter(x => !!x.controls.recent)
};
export default topProjects;
