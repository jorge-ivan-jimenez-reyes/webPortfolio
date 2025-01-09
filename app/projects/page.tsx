import { projectsData } from '../../data/projectsData';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-semibold text-center">Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}