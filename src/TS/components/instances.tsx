// These are specific instances of components

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/network_jam.png'

//PROJECT CARD INSTANCES///////////////////////////////////////////////////////////////////
const roleColor:string = "MediumSeaGreen"
const softwareColor:string = "LightSeaGreen"
const codeColor:string = "Plum"

function NetworkJamCard() {
    return(
        <ProjectCard title="Network Jam!" description="This is a sample project description." 
          imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
            ["Pico-8", softwareColor],
            ["Github", softwareColor],
            ["Lua", codeColor],
        ])} />
    );
}

function MyndspellCard() {
    return(
        <ProjectCard title="Myndspell: The Wizard Maze" description="This is a sample project description." 
          imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Producer", roleColor],
            ["Designer", roleColor],
            ["Godot", softwareColor],
            ["Github", softwareColor],
            ["Jira", softwareColor],
            ["GDScript", codeColor],
        ])} />
    );
}
///////////////////////////////////////////////////////////////////////////////////////////

export {NetworkJamCard, MyndspellCard}