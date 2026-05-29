//portfolio projects page

//react imports
import { Container } from 'react-bootstrap'

//component imports
import { SubBar, ProjectCard } from '../components/component.tsx'
import type {ProjectProps} from '../components/component.tsx'

//data imports
import projectData from '../../Data/projects.json'

function Projects() {
    
    const projects = projectData as ProjectProps[]

    return (
        <div className="page">
            <h1 className="page-title">Projects</h1>
            <SubBar items={["Highlighted Projects", "All Projects", "Digital Games", "Tabletop Games", "Applications", "Other Projects"]}></SubBar>
                <Container className = "project-container">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project}/>
                    ))}
                </Container>
        </div>
    )
}


export default Projects