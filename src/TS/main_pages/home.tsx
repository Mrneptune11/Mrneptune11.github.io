//This is the home page of my very cool portfolio wow

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/network_jam.png'
import { Container } from 'react-bootstrap'


//home page contents
function Home() {

  return (
    <div className= "page">
      <h1 className="page-title">Home</h1>
      <Container className = "project-container">
      <ProjectCard title="Network Jam!" description="This is a sample project description." 
        imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <ProjectCard title="Network Jam!" description="This is a sample project description." 
        imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <ProjectCard title="Network Jam!" description="This is a sample project description." 
        imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </Container>
    </div>
  )
}

export default Home
