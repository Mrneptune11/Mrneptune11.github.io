//TSX file dedicated to storing resuable components across the site

//library imports
import { Card, CardLink, Container } from "react-bootstrap"
import { Link, useLocation, useSearchParams} from "react-router-dom"

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
  tagDict:Array<Array<string>>
  metaTags?:Array<MetaTag>
}

//props for tags under project cards
type TagProps = {
    text:string,
    bgColor:string, 
}

//MetaTag union type validate tag data
type MetaTag =
  | "all"
  | "highlight"
  | "featured"
  | "digital"
  | "tabletop"
  | "application"
  | "other"
  | "error"

//component function
function ProjectCard(projectProps: ProjectProps) {
    return (
        <CardLink className="project-card-wrapper" href={projectProps.refSrc} data-meta={projectProps.metaTags}>
            <Card className="project-card">
                <Card.Title>{projectProps.title}</Card.Title>
                <Card.Body className="card-description">{projectProps.description}</Card.Body>
                <Card.Img src={projectProps.imgSrc || "holder.js/100px180"} />

             <Container className = 'tag-container'>
                                {projectProps.tagDict.map(([text, color], index) => (
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

    const curPage = useLocation();

    return (
        <div>
            <nav className="navbar">
                    <img className = "myheader" src = {header}/> 
                    <Link to="/" style={evaluateStyle(curPage.pathname,"/")}>
                        <HomeIcon colorFill={curPage.pathname === "/" ? "var(--highlight_color)" : "var(--primary_color)"}/>
                        Home
                    </Link>
                    <Link to="/projects" style={evaluateStyle(curPage.pathname,"/projects")}>
                        <ProjectIcon colorFill={curPage.pathname === "/projects" ? "var(--highlight_color)" : "var(--primary_color)"}/>
                        Projects
                    </Link>
                    <Link to="/about" style={evaluateStyle(curPage.pathname,"/about")}>
                        <AboutIcon colorFill={curPage.pathname === "/about" ? "var(--highlight_color)" : "var(--primary_color)"}/>
                        About  
                    </Link>
                    <Link to="/resume" style={evaluateStyle(curPage.pathname,"/resume")}>
                        <ResumeIcon colorFill={curPage.pathname === "/resume" ? "var(--highlight_color)" : "var(--primary_color)"}/>
                        Resume
                    </Link>
            </nav>
        </div>
    )
}

function evaluateStyle(curPage:string, key:string):React.CSSProperties {

    return {textDecoration : curPage === key ? "underline" : "none",
            scale : curPage === key ? 1.1 : 1,
            color : curPage === key ? "var(--highlight_color)" : "var(--primary_color)"
    }
}


///////////////////////////////////////////////////////////////////////////////////////////


//SOCIAL BAR COMPONENT////////////////////////////////////////////////////////////////////////

//persistent navigation bar at the top of the page
function SocialBar() {
    return (
        <div className="socialbar">
                <a href="https://www.linkedin.com/in/sebastian-lanz-53167b256" >
                    <ItchIcon colorFill=""/>
                </a>
                <a href="https://mr-neptune.itch.io/" >
                    <LinkedInIcon colorFill=""/>
                </a>
                <a href="mailto:sebastianlanz301@gmail.com" >
                    <EmailIcon colorFill=""/>
                </a>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////////////////

//SUB BAR COMPONENT////////////////////////////////////////////////////////////////////////

//sub bar data
type SubBarItem = {
    label:string,
    tag:MetaTag
}

//sub bar data
type SubBarProps = {
    items:Array<SubBarItem>,
    setFilter: (tag:MetaTag) => void

}



//sub bars hold multiple buttons that change behaviour on a given page
function SubBar(subBarProps:SubBarProps) {

    const [searchParams, setSearchParams] = useSearchParams();
    const defaultParam:string = subBarProps.items[0].label
    const currentSort = searchParams.get("sort") ?? defaultParam;

    //sets the default sort for the page
    useEffect(() => {
        if (!searchParams.has("sort")) {
            setSearchParams({ sort: defaultParam });
        }
    }, [searchParams, setSearchParams, defaultParam]);

    //helper function for handlign click on sub bar item
    function subClick(subBarProps:SubBarProps, item:SubBarItem) {
        subBarProps.setFilter(item.tag);
        setSearchParams({ sort: item.label});
    }

    //updates page sort based on the current loaded sort
    useEffect(() => {
        const item = findItem(subBarProps, currentSort);

        if (item) {
            subBarProps.setFilter(item.tag);
        }
    },[subBarProps, currentSort]);

    return (
        <nav className = "sub-bar">    
            <br/>
            {subBarProps.items.map((item, index) =>
            <button key = {index} onClick = {() => subClick(subBarProps,item)} style = {updateStyle(currentSort,item.label)} >{item.label}</button>)}
        </nav>
    );

}

function updateStyle(curSort:string, key:string):React.CSSProperties {

    return {textDecoration : curSort === key ? "underline" : "none",
            color : curSort === key ? "white" : "#535bf2"
    }
}

function findItem(subBarProps:SubBarProps, label:string):SubBarItem {
    const items:Array<SubBarItem> = subBarProps.items;

    for (let i = 0; i < items.length; i++) {
        const item:SubBarItem = items[i]

        if (item.label === label) {
            return item;
        }
    }

    return { label: "Fatal", tag : "error"}
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

export type {ProjectProps, MetaTag, SubBarItem};