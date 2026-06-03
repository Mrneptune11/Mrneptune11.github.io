//about me page

//react imports
import { Container } from "react-bootstrap"

//component imports
import { TextBlurb } from "../components/component"

function About() {

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
                    an RPG that explores mental health and the human psyche. Alongside Myndspell, I am always looking for game jams as 
                    opportunities to create something new.`
                    }
                    />
                    <TextBlurb className = 'about-blurb' content= {`Outside of my creative works, I enjoy watching movies, visiting amusement parks 
                    and museums, and taking care of my pet dogs and tortoises. I have found that my hobbies are essential inspiration for me
                    as an [#22d1ce]experience designer[/].`
                    }
                    />

                </div>
            </Container>
        </div>
    )
}


export default About