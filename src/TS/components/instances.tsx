// These are specific instances of components

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/title_cards/network_jam.png'
import myndspellImage from '../../assets/title_cards/myndspell.png'
import atwwdImage from '../../assets/title_cards/atwwd.png'


//PROJECT CARD INSTANCES///////////////////////////////////////////////////////////////////
const roleColor:string = "MediumSeaGreen"
const softwareColor:string = "LightSeaGreen"
const codeColor:string = "Plum"

function NetworkJamCard() {
    return(
        <ProjectCard title="Network Jam!" description="This is a sample project description." 
          imgSrc={networkJamImage} refSrc="https://tapeknot.itch.io/network-jam"
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
          imgSrc={myndspellImage} refSrc="https://jraxen.itch.io/myndspell"
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

function ATWWDCard() {
    return(
        <ProjectCard title="And The World Went Dark" description="This is a sample project description." 
          imgSrc={atwwdImage} refSrc="https://docterbuster.itch.io/and-the-world-went-dark"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Godot", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
            ["C#", codeColor],
        ])} />
    );
}
///////////////////////////////////////////////////////////////////////////////////////////

export {NetworkJamCard, MyndspellCard, ATWWDCard}