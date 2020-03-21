// app
import projects from '../projects/project';

const topProjects = {
	githubProfile: projects.githubProfile,
		title: 'Recent Work',
		items: projects.items.filter(x => !!x.controls.recent)
};
export default topProjects;
