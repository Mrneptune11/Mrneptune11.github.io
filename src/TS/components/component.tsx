//TSX file dedicated to storing resuable components across the site

//library imports
import { Card, CardLink } from "react-bootstrap"
import { Link } from "react-router-dom"
//CSS imports
import '../../CSS/component.css'

//Router import
import "../routes.tsx"


//PROJECT CARD COMPONENT///////////////////////////////////////////////////////////////////

//project card props type
//Takes a tile, descriptions, optional image source, and reference link source
type ProjectProps = {
  title:string, 
  description:string,
  imgSrc?:string,
  refSrc:string,
}

//project card component
function ProjectCard(projectProps: ProjectProps) {
    return (
        <CardLink className="project-card-wrapper" href={projectProps.refSrc}>
            <Card className="project-card">
                <Card.Title>{projectProps.title}</Card.Title>
                <Card.Body>{projectProps.description}</Card.Body>
                <Card.Img src={projectProps.imgSrc || "holder.js/100px180"} />
            </Card>
        </CardLink>
        
    )
}
///////////////////////////////////////////////////////////////////////////////////////////

//NAV BAR COMPONENT////////////////////////////////////////////////////////////////////////
function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}
///////////////////////////////////////////////////////////////////////////////////////////
export { ProjectCard, NavBar}