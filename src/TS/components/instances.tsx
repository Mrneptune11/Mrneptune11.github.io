// These are specific instances of components

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/title_cards/network_jam.png'
import myndspellImage from '../../assets/title_cards/myndspell.png'
import atwwdImage from '../../assets/title_cards/atwwd.png'
import digiDivaImage from '../../assets/title_cards/DigiDiva.png'
import jamcorp3dImage from '../../assets/title_cards/jamcorp3d.png'
import shinobiDuelImage from '../../assets/title_cards/shinobiDuel.png'
import noRestForTheWeatherManImage from "../../assets/title_cards/norestforweatherman.png"
import caindyLandImage from '../../assets/title_cards/caindyLand.png'
import tables4uImage from '../../assets/title_cards/tables4u.png'
import grabbyGremlinsImage from '../../assets/title_cards/grabbyGremlins.png'


//PROJECT CARD INSTANCES///////////////////////////////////////////////////////////////////
const roleColor:string = "MediumSeaGreen"
const softwareColor:string = "LightSeaGreen"
const codeColor:string = "Plum"

function NetworkJamCard() {
    return(
        <ProjectCard title="Network Jam!" description="Deliver network packets through cyberspace and dodge corrupted data." 
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
        <ProjectCard title="Myndspell: The Wizard Maze" description="Meet quirky characters and face foes in this world of your own fantasy." 
          imgSrc={myndspellImage} refSrc="https://jraxen.itch.io/myndspell"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Producer", roleColor],
            ["Designer", roleColor],
            ["Godot", softwareColor],
            ["Wwise", softwareColor],
            ["Github", softwareColor],
            ["Jira", softwareColor],
            ["GDScript", codeColor],
        ])} />
    );
}

function ATWWDCard() {
    return(
        <ProjectCard title="And The World Went Dark" description="Combat the forces of the darkness as you traverse a dying world." 
          imgSrc={atwwdImage} refSrc="https://docterbuster.itch.io/and-the-world-went-dark"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Godot", softwareColor],
            ["Yarn Spinner", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
            ["C#", codeColor],
        ])} />
    );
}

function DigiDivaCard() {
    return(
        <ProjectCard title="DigiDiva" description="As a chronically online influencer grow your fanbase and defend your image." 
          imgSrc={digiDivaImage} refSrc="https://allisonvtnguyen.itch.io/digidiva"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Audio", roleColor],
            ["Unreal Engine", softwareColor],
            ["Github", softwareColor],
            ["C++", codeColor],
            ["Blueprints", codeColor],
        ])} />
    );
}

function JamCorpCard() {
    return(
        <ProjectCard title="JamCorp3D" description="Platform to the beat to take back your stolen jams from evil entrepeneur cats."
          imgSrc={jamcorp3dImage} refSrc= "https://mustardrift.itch.io/jamcorp3d"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Designer", roleColor],
            ["Unreal Engine", softwareColor],
            ["Wwise", softwareColor],
            ["Github", softwareColor],
            ["C++", codeColor],
            ["Blueprints", codeColor],
        ])} />
    );
}

function ShinobiDuelCard() {
    return(
        <ProjectCard title="Shinobi Duel" description="Fight as a ninja and battle opponents to the death in procedural arenas."
          imgSrc={shinobiDuelImage} refSrc= "https://mr-neptune.itch.io/shinobi-duel"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
            ["Custom Engine", softwareColor],
            ["Github", softwareColor],
            ["C++", codeColor],
            ["SFML", codeColor],
        ])} />
    );
}

function NoRestForTheWeatherManCard() {
    return(
        <ProjectCard title="No Rest for the Weatherman" description="Sick and on the job, help guide the weather where it needs to be."
          imgSrc={noRestForTheWeatherManImage} refSrc= "https://gabe-taylor.itch.io/no-rest-for-the-weatherman"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Designer", roleColor],
            ["Godot", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
        ])} />
    );
}

function CaindyLandCard() {
    return(
        <ProjectCard title="C(AI)ndy.Land" description="Procedurally generate 'print and play' game boards with custom rulesets."
          imgSrc={caindyLandImage} refSrc= "https://marvelous-croquembouche-1082a4.netlify.app/"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Designer", roleColor],
            ["Svelte", softwareColor],
            ["Github", softwareColor],
            ["HTML", codeColor],
            ["JavaScript", codeColor],
            ["CSS", codeColor],
            ["WebGL", codeColor],
        ])} />
    );
}

function Tables4U() {
    return(
        <ProjectCard title="Tables4U" description="Web application for restaurants and consumers to manage reservations."
          imgSrc={tables4uImage} refSrc= "https://github.com/Mrneptune11/tables4u"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["React", softwareColor],
            ["MySQL", softwareColor],
            ["AWS", softwareColor],
            ["Tailwind CSS", softwareColor],
            ["Typescript", codeColor],
            ["Javascript", codeColor],
        ])} />
    );
}

function GrabbyGremlins() {
    return(
        <ProjectCard title="Grabby Gremlins" description="Protect treasure against hordes of gremlins using your trusty vacuum."
          imgSrc={grabbyGremlinsImage} refSrc= "https://mantisstudios.itch.io/grabby-gremlins"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Designer", roleColor],
            ["Unity", softwareColor],
            ["Github", softwareColor],
            ["C#", codeColor],
        ])} />
    );
}
///////////////////////////////////////////////////////////////////////////////////////////

export {NetworkJamCard, MyndspellCard, ATWWDCard, DigiDivaCard, JamCorpCard, ShinobiDuelCard, 
    NoRestForTheWeatherManCard, CaindyLandCard, Tables4U, GrabbyGremlins}