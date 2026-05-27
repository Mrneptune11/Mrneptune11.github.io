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

type TextBlurbProps = {
content:string,
backgroundColor?:string,
textColor?:string,
}

//reusable text box component
function TextBlurb(textBlurbProps: TextBlurbProps) {

const dict:Map<string,string> = highLighter(textBlurbProps.content)

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

//used to highlight specific parts of text in a color using a simple tag system : "[color]text[/]"
function highLighter(text:string):Map<string,string> {
    const dict:Map<string,string> = new Map<string, string>();

    let textReader:string = "";
    let tagReader:string = "";
    
    let colorRecording:boolean = false;
    let textRecording:boolean = true;

    for (let i:number = 0; i < text.length; i++){
        const ch:string = text[i];

        //tag checkets
        if (ch === "[") {
            dict.set(textReader, tagReader);

            colorRecording = true;
            textRecording = false;
            textReader = "";
            tagReader = "";
            continue;
        }
        if (ch === "]") {
            colorRecording = false;
            textRecording = true
            continue;
        }

        //add tag when reading tag
        if (colorRecording) {
            tagReader += ch;
        }

        //add text when reading plain text
        if (textRecording)
            textReader += ch;
    }

    dict.set(textReader, tagReader); //adding the final text and tag

    return dict;
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

export { ProjectCard, NavBar, ScrollToTop, TextBlurb, SocialBar};