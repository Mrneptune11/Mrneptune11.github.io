//portfolio projects page

//react imports
import { Container} from 'react-bootstrap'

//card importants
import { NetworkJamCard, MyndspellCard, ATWWDCard, DigiDivaCard, JamCorpCard, 
        CaindyLandCard, ShinobiDuelCard, NoRestForTheWeatherManCard, Tables4UCard,
        GrabbyGremlinsCard, TrailBlazerCard, ProjectUnwarmingCard, BizarreBazaarCard,
        CuriosCabinetCard, LegendOfTheTynnCard, CellBreakCard, HappyHelpersCard,
        ThymeTimeCard, ProjectSpookems,
    } from '../components/instances.tsx'

//component imports
import { SubBar } from '../components/component.tsx'

function Projects() {

    return (
        <div className="page">
            <h1 className="page-title">Projects</h1>
            <SubBar items={["Highlighted Projects", "All Projects", "Digital Games", "Tabletop Games", "Applications", "Other Projects"]}></SubBar>
                <Container className = "project-container">
                    <NetworkJamCard/>
                    <MyndspellCard/>
                    <ATWWDCard/>
                    <DigiDivaCard/>
                    <JamCorpCard/>
                    <ShinobiDuelCard/>
                    <NoRestForTheWeatherManCard/>
                    <CaindyLandCard/>
                    <Tables4UCard/>
                    <GrabbyGremlinsCard/>
                    <TrailBlazerCard/>
                    <ProjectUnwarmingCard/>
                    <BizarreBazaarCard/>
                    <CuriosCabinetCard/>
                    <LegendOfTheTynnCard/>
                    <CellBreakCard/>
                    <HappyHelpersCard/>
                    <ThymeTimeCard/>
                    <ProjectSpookems/>
                </Container>
        </div>
    )
}


export default Projects