//portfolio projects page

//react imports
import { Container } from 'react-bootstrap'

//card importants
import { NetworkJamCard, MyndspellCard, ATWWDCard, DigiDivaCard, JamCorpCard, 
        CaindyLandCard, ShinobiDuelCard, NoRestForTheWeatherManCard, Tables4U,
        GrabbyGremlins, TrailBlazer
    } from '../components/instances.tsx'

function Projects() {

    return (
        <div className="page">
            <h1 className="page-title">Projects</h1>
                <Container className = "project-container">
                    <NetworkJamCard/>
                    <MyndspellCard/>
                    <ATWWDCard/>
                    <DigiDivaCard/>
                    <JamCorpCard/>
                    <ShinobiDuelCard/>
                    <NoRestForTheWeatherManCard/>
                    <CaindyLandCard/>
                    <Tables4U/>
                    <GrabbyGremlins/>
                    <TrailBlazer/>
                </Container>
        </div>
    )
}


export default Projects