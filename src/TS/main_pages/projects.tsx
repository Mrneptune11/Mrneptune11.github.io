//portfolio projects page

//react imports
import { Container } from 'react-bootstrap'

//card importants
import { NetworkJamCard, MyndspellCard, ATWWDCard } from '../components/instances.tsx'

function Projects() {

    return (
        <div className="page">
            <h1 className="page-title">Projects</h1>
                <Container className = "project-container">
                    <NetworkJamCard/>
                    <MyndspellCard/>
                    <ATWWDCard/>
                </Container>
        </div>
    )
}


export default Projects