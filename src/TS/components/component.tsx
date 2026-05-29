//TSX file dedicated to storing resuable components across the site

//library imports
import { Card, CardLink, Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

//CSS imports
import '../../CSS/component.css'

//Router import
import "../routes.tsx"
import { useEffect } from "react"

//Asset imports
import { EmailIcon, LinkedInIcon, ItchIcon, HomeIcon, AboutIcon, ProjectIcon, ResumeIcon } from "./svg_embeds.tsx"
import header from "/assets/pixel/Header.png"

//Util imports
import {Parser} from '../utility/parser.tsx'


//PROJECT CARD COMPONENT///////////////////////////////////////////////////////////////////

//project card props type
//Takes a tile, descriptions, optional image source, and reference link source
type ProjectProps = {
  title:string, 
  description:string,
  imgSrc?:string,
  refSrc:string,
  tagDict:Map<string,string>
  metaTags?:Array<MetaTag>
}

//props for tags under project cards
type TagProps = {
    text:string,
    bgColor:string, 
}

//MetaTag union type validate tag data
type MetaTag =
  | "highlight"
  | "digital"
  | "tabletop"
  | "application"
  | "other"

//component function
function ProjectCard(projectProps: ProjectProps) {
    return (
        <CardLink className="project-card-wrapper" href={projectProps.refSrc} data-meta={projectProps.metaTags}>
            <Card className="project-card">
                <Card.Title>{projectProps.title}</Card.Title>
                <Card.Body className="card-description">{projectProps.description}</Card.Body>
                <Card.Img src={projectProps.imgSrc || "holder.js/100px180"} />

             <Container className = 'tag-container'>
                                {Array.from(projectProps.tagDict.entries()).map(([text, color], index) => (
                    <ProjectTag key = {index} bgColor={color} text = {text}>
                    </ProjectTag>
                ))}
                </Container>
            </Card>
        </CardLink> 
    )
}

function ProjectTag(tagProps:TagProps) {
    return (
        <div className='project-tag' style={{backgroundColor: tagProps.bgColor}}>{tagProps.text}</div>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////

//TEXT BLURB COMPONENT/////////////////////////////////////////////////////////////////////
type TextBlurbProps = {
content:string,
backgroundColor?:string,
textColor?:string,
}

//reusable text box component
function TextBlurb(textBlurbProps: TextBlurbProps) {

const dict:Map<string,string> = Parser.colorHighlighter(textBlurbProps.content)

    return ( 
        <div
            className="text-blurb"
            style={{backgroundColor: textBlurbProps.backgroundColor,
                color: textBlurbProps.textColor,
            }}>

            {Array.from(dict.entries()).map(([text, tag], index) => (
                <span className = "text-section" key={index} style={{color: tag || textBlurbProps.textColor}}>
                    {text}
                </span>
            ))}
        </div>
    
    );
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

//SUB BAR COMPONENT////////////////////////////////////////////////////////////////////////

//
type SubBarProps = {
    items:Array<string>,
}

//sub bars hold multiple buttons that change behaviour on a given page
function SubBar(subBarProps:SubBarProps) {
    return (
        <nav>
         {subBarProps.items.map((item, index) =>
            <Link to ="" key = {index}>{item}</Link>)}
        </nav>
    );

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

export { ProjectCard, NavBar, ScrollToTop, TextBlurb, SocialBar,ProjectTag, SubBar};