// app
import projects from '../projects/projects';

const topProjects = {
	githubProfile: projects.githubProfile,
		title: 'Top Projects',
		items: projects.items.filter(x => !!x.controls.recent)
};
export default topProjects;
