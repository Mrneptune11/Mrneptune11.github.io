//about me page

//react imports
import { Container } from "react-bootstrap"
import { useState } from "react";

//component imports
import { TextBlurb, type MetaTag, type SubBarItem, SubBar, SkillBlurb, type SkillBlurbProps  } from "../components/component"

//util imports
import { setInfoBox } from "../utility/project_filter";

//data imports
import infoData from '../../Data/info_blurbs.json'

function About() {

    const [filter, setFilter] = useState<string>("skills");
    const info:Array<SkillBlurbProps> = infoData as Array<SkillBlurbProps>

    const items:Array<SubBarItem> = [
        {label: "Skills", tag : "skills" as MetaTag},
        {label: "Experience", tag : "experience" as MetaTag},
        {label: "Education", tag : "education" as MetaTag},
        {label: "Activities", tag : "activities" as MetaTag},

    ];

    

    return (
        <div className="page">
            <br/>
            <Container className = 'about-container'> 
                <img className = 'portrait' src = '/assets/portrait/it_me.png'></img>
                <div className = 'about-text'>
                    <TextBlurb className = 'about-blurb' content= {`I am passionate about creating unique and interesting [#22d1ce]experiences[/]. 
                    From digital games and software to tabletop games and weird analog creations, I aim to have my creativity shine
                    in all of my projects.`
                    }
                    />
                    <TextBlurb className = 'about-blurb' content= {`My current big project is [mediumorchid]Myndspell:The Wizard Maze[/], 
                    an RPG that explores mental health and the human psyche. Alongside Myndspell, I am always looking for game jams and hackathons 
                    as opportunities to create something new.`
                    }
                    />
                    <TextBlurb className = 'about-blurb' content= {`Outside of my creative works, I enjoy watching movies, visiting amusement parks 
                    and museums, and taking care of my pet dogs and tortoises. I have found that my hobbies are essential inspiration for me
                    as an [#22d1ce]experience designer[/].`
                    }
                    />

                </div>
            </Container>
            <SubBar items={items} setFilter = {setFilter}></SubBar>
            <Container className = 'info-container'>
                <SkillBlurb{...setInfoBox(filter as MetaTag, info)}/>
            </Container>

        </div>
    )
}


export default About