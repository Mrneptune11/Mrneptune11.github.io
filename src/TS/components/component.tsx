//TSX file dedicated to storing resuable components across the site

//library imports
import { Card, CardLink } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

//CSS imports
import '../../CSS/component.css'

//Router import
import "../routes.tsx"
import { useEffect } from "react"

//Asset imports
import { EmailIcon, LinkedInIcon, ItchIcon, HomeIcon, AboutIcon, ProjectIcon, ResumeIcon } from "./svg_embeds.tsx"
import header from "../../assets/pixel/Header.png"


//PROJECT CARD COMPONENT///////////////////////////////////////////////////////////////////

//project card props type
//Takes a tile, descriptions, optional image source, and reference link source
type ProjectProps = {
  title:string, 
  description:string,
  imgSrc?:string,
  refSrc:string,
}

//component function
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

//TEXT BLURB COMPONENT/////////////////////////////////////////////////////////////////////

//reusable text box component
function TextBlurb() {
    return null;
}
///////////////////////////////////////////////////////////////////////////////////////////

//NAV BAR COMPONENT////////////////////////////////////////////////////////////////////////

//persistent navigation bar at the top of the page
function NavBar() {
    return (
        <div>
            <nav className="navbar">
                    <img className = "myheader" src = {header}/> 
                    <Link to="/">
                        <HomeIcon/>
                        Home
                    </Link>
                    <Link to="/projects">
                        <ProjectIcon/>
                        Projects
                    </Link>
                    <Link to="/about">
                        <AboutIcon/>
                        About  
                    </Link>
                    <Link to="/resume">
                        <ResumeIcon/>
                        Resume
                    </Link>
            </nav>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////////////////


//SOCIAL BAR COMPONENT////////////////////////////////////////////////////////////////////////

//persistent navigation bar at the top of the page
function SocialBar() {
    return (
        <div className="socialbar">
                <a href="https://www.linkedin.com/in/sebastian-lanz-53167b256" >
                    <ItchIcon/>
                </a>
                <a href="https://mr-neptune.itch.io/" >
                    <LinkedInIcon/>
                </a>
                <a href="mailto:sebastianlanz301@gmail.com" >
                    <EmailIcon/>
                </a>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////////////////

//SCROLL COMPONENT/////////////////////////////////////////////////////////////////////////
//used to scroll to the top of page when rerouting
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}
///////////////////////////////////////////////////////////////////////////////////////////

export { ProjectCard, NavBar, ScrollToTop, TextBlurb, SocialBar };