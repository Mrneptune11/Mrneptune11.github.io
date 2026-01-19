//my reusable react components will go here!

import { Card, CardLink } from "react-bootstrap"
import '../CSS/component.css'


//PROJECT CARD COMPONENT///////////////////////////////////////////////////////////////////


//project card props type
//Takes a tile, descriptions, and optional image source
type ProjectProps = {
  title:string, 
  description:string,
  imgSrc?:string,
  refSrc:string,
}

//project card component
function ProjectCard(projectProps: ProjectProps) {
    return (
        <CardLink href={projectProps.refSrc}>
            <Card className="project-card">
                <Card.Title>{projectProps.title}</Card.Title>
                <Card.Body>{projectProps.description}</Card.Body>
                <Card.Img src={projectProps.imgSrc || "holder.js/100px180"} />
                <Card.Link href={projectProps.refSrc}></Card.Link>
            </Card>
        </CardLink>
        
    )
}
///////////////////////////////////////////////////////////////////////////////////////////

export { ProjectCard }