// app
import projects from '../projects/projects';

const topProjects = {
	title: 'Top Projects',
	items: projects.items.filter(x => !!x.controls.recent)
};
export default topProjects;
