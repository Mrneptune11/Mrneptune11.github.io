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

export {filterRenderTargets}