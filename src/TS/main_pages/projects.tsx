//portfolio projects page

//react imports
import { Container } from 'react-bootstrap'
import {useState} from 'react'

//component imports
import { SubBar, ProjectCard } from '../components/component.tsx'
import {type ProjectProps, type SubBarItem, type MetaTag} from '../components/component.tsx'

//data imports
import projectData from '../../Data/projects.json'

function Projects() {

    const [filter, setFilter] = useState<MetaTag>("highlight")
    
    const projects = projectData as Array<ProjectProps>
    const renderTargets:Array<ProjectProps> = filterRenderTargets(projects, filter)

    const items:Array<SubBarItem> = [
        {label: "Project Highlights", tag :"highlight"},
        {label: "All Projects", tag :"all"},
        {label: "Digital Games", tag :"digital"},
        {label: "Tabletop Games", tag :"tabletop"},
        {label: "Applications", tag :"application"},
        {label: "Other Projects", tag :"other"},
    ]

    return (
        <div className="page">
            <h1 className="page-title">Projects</h1>
            <SubBar items={items} setFilter={setFilter}></SubBar>
                <Container className = "project-container">
                    {renderTargets.map((project) => (
                        <ProjectCard key={project.title} {...project}/>
                    ))}
                </Container>
        </div>
    )
}

function filterRenderTargets(potentialTargets:Array<ProjectProps>, filter:MetaTag):Array<ProjectProps> {
    const renderTargets:Array<ProjectProps> = []

    //return all targets if all filter
    if (filter === "all") {
            return potentialTargets;
    }

    //perform filter
    for (let i:number = 0; i < potentialTargets.length; i++) {
        const project:ProjectProps = potentialTargets[i]
        
        if (project.metaTags && project.metaTags.includes(filter)) {
            renderTargets.push(project);
        }
    }

    return renderTargets;
    
}


export default Projects