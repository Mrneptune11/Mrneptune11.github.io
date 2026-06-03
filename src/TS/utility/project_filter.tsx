//type imports
import { type ProjectProps, type MetaTag} from "../components/component";

//filter project data and returns targets according to tags
function filterRenderTargets(potentialTargets:Array<ProjectProps>, filter:MetaTag):Array<ProjectProps> {
    const renderTargets:Array<ProjectProps> = []

    //return all targets if all filter
    if (filter === "all") {
            return potentialTargets;
    }

    //perform filter
    for (let i:number = 0; i < potentialTargets.length; i++) {
        const project:ProjectProps = potentialTargets[i]
        
        if (project.metaTags && project.metaTags.includes(filter)) {
            renderTargets.push(project);
        }
    }

    return renderTargets;
    
}



//choose a random favicon for fun
function chooseFavIcon() {
    const favicons:Array<string> = [
    '/assets/favicon/grapeBoy.png',
    '/assets/favicon/angy_rock_smile-export.png',
    '/assets/favicon/grimpy1.png',
    '/assets/favicon/jamcorpIcon.png',
    '/assets/favicon/minister-export.png',
    '/assets/favicon/netWorkJamEnemy.png',
    '/assets/favicon/Trumbus1.png',
    '/assets/favicon/Time Thyme.png',
    '/assets/favicon/forg-export.png',
    ]

    const randomIcon =
        favicons[Math.floor(Math.random() * favicons.length)];

    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    favicon.href = randomIcon;

    console.log(randomIcon)
}

export {filterRenderTargets, chooseFavIcon}