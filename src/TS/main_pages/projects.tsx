//portfolio projects page

//react imports
import { Container } from 'react-bootstrap'
import {useState} from 'react'

//component imports
import { SubBar, ProjectCard } from '../components/component.tsx'
import {type ProjectProps, type SubBarItem, type MetaTag} from '../components/component.tsx'
import { filterRenderTargets } from '../utility/project_filter.tsx'

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

export default Projects