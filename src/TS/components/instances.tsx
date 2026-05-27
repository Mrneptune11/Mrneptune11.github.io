// These are specific instances of components

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/network_jam.png'

//PROJECT CARD INSTANCES///////////////////////////////////////////////////////////////////

function NetworkJamCard() {
    return(
        <ProjectCard title="Network Jam!" description="This is a sample project description." 
          imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          tagDict = {new Map<string,string>(
            [["Programmer", "Green"],
            ["Artist", "Green"],
            ["Designer", "Green"],
            ["Pico-8", "Blue"],
            ["Github", "Blue"],
            ["Lua", "Red"],
        ])} />
    );
}
///////////////////////////////////////////////////////////////////////////////////////////

export {NetworkJamCard}