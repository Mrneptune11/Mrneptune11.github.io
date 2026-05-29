// These are specific instances of components

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '/assets/title_cards/network_jam.png'
import myndspellImage from '/assets/title_cards/myndspell.png'
import atwwdImage from '/assets/title_cards/atwwd.png'
import digiDivaImage from '/assets/title_cards/DigiDiva.png'
import jamcorp3dImage from '/assets/title_cards/jamcorp3d.png'
import shinobiDuelImage from '/assets/title_cards/shinobiDuel.png'
import noRestForTheWeatherManImage from "/assets/title_cards/norestforweatherman.png"
import caindyLandImage from '/assets/title_cards/caindyLand.png'
import tables4uImage from '/assets/title_cards/tables4u.png'
import grabbyGremlinsImage from '/assets/title_cards/grabbyGremlins.png'
import trailBlazerImage from '/assets/title_cards/trailblazer.png'
import projectUnwarmingImage from '/assets/title_cards/projectUnwarming.png'
import bizarreBazaarImage from '/assets/title_cards/bizarreBizarre.png'
import curioCabinetImage from '/assets/title_cards/curiosCabinet.png'
import legendOfTheTynnImage from "/assets/title_cards/legendOfTheTynn.png"
import cellBreakImage from "/assets/title_cards/cellBreak.png"
import happyHelpersImage from "/assets/title_cards/happyHelpers.png"
import thymeTimeImage from '/assets/title_cards/thymeTime.png'
import projectSpookemsImage from '/assets/title_cards/projectSpookems.png'

//Color Constants///////////////////////////////////////////////////////////////////
const roleColor:string = "MediumSeaGreen"
const softwareColor:string = "LightSeaGreen"
const codeColor:string = "Plum"
////////////////////////////////////////////////////////////////////////////////////


//PROJECT CARD INSTANCES///////////////////////////////////////////////////////////////////

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
        ])}
            metaTags={["digital"]} />
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
        ])}
            metaTags={["highlight","digital"]} />
    );
}

function ATWWDCard() {
    return(
        <ProjectCard title="And The World Went Dark" description="Combat the forces of the darkness as you traverse a dying world." 
          imgSrc={atwwdImage} refSrc="https://docterbuster.itch.io/and-the-world-went-dark"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Godot Mono", softwareColor],
            ["Yarn Spinner", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
            ["C#", codeColor],
        ])} 
            metaTags={["digital"]} />  
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
        ])} 
            metaTags={["highlight","digital"]} />  
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
            ["Jira", softwareColor],
            ["C++", codeColor],
            ["Blueprints", codeColor],
        ])}
            metaTags={["highlight","digital"]} />  
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
        ])} 
            metaTags={["digital"]} />  
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
        ])} 
            metaTags={["digital"]} />  
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
        ])}
            metaTags={["application", "tabletop"]} />  
    );
}

function GrabbyGremlinsCard() {
    return(
        <ProjectCard title="Grabby Gremlins" description="Protect treasure against hordes of gremlins using your trusty vacuum."
          imgSrc={grabbyGremlinsImage} refSrc= "https://mantisstudios.itch.io/grabby-gremlins"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Designer", roleColor],
            ["Unity", softwareColor],
            ["Github", softwareColor],
            ["C#", codeColor],
        ])} 
            metaTags={["digital"]} />  
    );
}

function CellBreakCard() {
    return(
        <ProjectCard title="Cell Break" description="As a virus break free of cell jail and cause the highest fever ever."
          imgSrc={cellBreakImage} refSrc= "https://mr-neptune.itch.io/cell-break"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
            ["Godot", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
        ])} 
            metaTags={["digital"]} />  
    );
}

function HappyHelpersCard() {
    return(
        <ProjectCard title="Happy Helpers™" description="Lost in a mysterious plane outside of reality, try to find you way back home."
          imgSrc={happyHelpersImage} refSrc= "https://mr-neptune.itch.io/happy-helpers"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Writer", roleColor],
            ["Designer", roleColor],
            ["Godot", softwareColor],
            ["Github", softwareColor],
            ["GDScript", codeColor],
        ])} 
            metaTags={["digital"]} />  
    );
}

function  ThymeTimeCard() {
    return(
        <ProjectCard title="Thyme Time" description="Quickly harvest veggies to make the most delicious meal."
          imgSrc={thymeTimeImage} refSrc= "https://cjpugs.itch.io/thyme-time"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
            ["Unity", softwareColor],
            ["Github", softwareColor],
            ["C#", codeColor],
        ])} 
            metaTags={["digital"]} />  
    );
}

function  ProjectSpookems() {
    return(
        <ProjectCard title="Project Spookems" description="While trick or treating, find a creepy mansion that surely hides candy inside."
          imgSrc={projectSpookemsImage} refSrc= "https://pkmnhx43.itch.io/project-spookems"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
            ["Godot Mono", softwareColor],
            ["Github", softwareColor],
            ["C#", codeColor],
        ])} 
            metaTags={["digital"]} />  
    );
}

function Tables4UCard() {
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
        ])}
            metaTags={["highlight", "application"]} />  
    );
}

function TrailBlazerCard() {
    return(
        <ProjectCard title="TrailBlazer" description="Mobile oriented web application for creating and following hiking trails."
          imgSrc={trailBlazerImage} refSrc= "https://github.com/ZenIsBestWolf/cs4241-final"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["React", softwareColor],
            ["MongoDB", softwareColor],
            ["AWS", softwareColor],
            ["Bootstrap", softwareColor],
            ["Auth0", softwareColor],
            ["Typescript", codeColor],
            ["SCSS", codeColor],
        ])} 
            metaTags={["highlight", "application"]} />  
    );
}

function ProjectUnwarmingCard() {
    return(
        <ProjectCard title="Project Unwarming" description="An AI powered global warming educational simulation game."
          imgSrc={projectUnwarmingImage} refSrc= "https://github.com/ClimateChangers-pos/ProjectUnwarming/"
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Pygame", softwareColor],
            ["Github", softwareColor],
            ["Jira", softwareColor],
            ["Python", codeColor],
        ])} 
            metaTags={["application"]} />  
    );
}

function BizarreBazaarCard() {
    return(
        <ProjectCard title="Bizarre Bazaar" description="Lie, lowball, and scalp in this haggling improv card game."
          imgSrc={bizarreBazaarImage} refSrc= "https://mr-neptune.itch.io/bizarre-bazaar"
          tagDict = {new Map<string,string>(
            [["Designer", roleColor],
            ["Writer", roleColor],
        ])} 
            metaTags={["tabletop"]} />  
    );
}

function CuriosCabinetCard() {
    return(
        <ProjectCard title="Curio's Cabinet" description="Proptotype for a narrative and puzzle driven 'escape room' in a cabinet."
          imgSrc={curioCabinetImage} refSrc= ""
          tagDict = {new Map<string,string>(
            [["Designer", roleColor],
            ["Artist", roleColor],
        ])} 
            metaTags={["other"]} />  
    );
}

function LegendOfTheTynnCard() {
    return(
        <ProjectCard title="The Legend of the Tynn" description="A 2024 ARG about a cryptid stealing items from a university."
          imgSrc={legendOfTheTynnImage} refSrc= ""
          tagDict = {new Map<string,string>(
            [["Programmer", roleColor],
            ["Artist", roleColor],
            ["Designer", roleColor],
        ])} 
            metaTags={["other"]} />  
    );
}

///////////////////////////////////////////////////////////////////////////////////////////

export {NetworkJamCard, MyndspellCard, ATWWDCard, DigiDivaCard, JamCorpCard, ShinobiDuelCard, 
        NoRestForTheWeatherManCard, CaindyLandCard, Tables4UCard, GrabbyGremlinsCard, 
        TrailBlazerCard, ProjectUnwarmingCard, BizarreBazaarCard, CuriosCabinetCard, 
        LegendOfTheTynnCard, CellBreakCard, HappyHelpersCard, ThymeTimeCard, ProjectSpookems,

}