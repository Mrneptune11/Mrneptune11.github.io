//This is the home page of my very cool portfolio wow

//CSS imports
import '../../CSS/app.css'

//component imports 
import { ProjectCard, TextBlurb } from '../components/component.tsx'

//asset imports
import networkJamImage from '../../assets/network_jam.png'
import { Container } from 'react-bootstrap'


//home page contents
function Home() {

  return (
    <div className= "page">
      <h1 className="page-title">Home</h1>
      <Container className = "top-container">
        <TextBlurb content={'Hello! I\'m Sebastian Lanz, aka [#22d1ce]Mr.Neptune[/], and welcome to my website! I\'m a [#22d1ce]game developer[/] and [#22d1ce]full-stack software engineer[/].'} 
           textColor='white' widthRatio = {'60%'}/>
      </Container>
      
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
