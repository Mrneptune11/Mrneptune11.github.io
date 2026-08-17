
import { Container } from 'react-bootstrap'

//CSS imports
import '../../../CSS/app.css'
import {ProjectDescription } from '../../components/component';

function Myndspell() {
    
    return (
        //About the project
        <div className = 'page'>
            <Container>
                <ProjectDescription 
                    title="Myndspell:The Wizard Maze"
                    link="https://jraxen.itch.io/myndspell"
                    text='In  Myndspell: The Wizard Maze, explore a world of your own fantasy, where the choices you make define who you become. Meet quirky characters and face foes in a choice-based conflict system as you travel the Maze’s rings…and, eventually, discover the secret hiding at its core.'
                ></ProjectDescription>
            </Container>
        </div>
    );
}

export default Myndspell;
