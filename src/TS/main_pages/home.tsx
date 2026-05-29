//This is the home page of my very cool portfolio wow

//CSS imports
import '../../CSS/app.css'

//component imports 
import { TextBlurb } from '../components/component.tsx'

//asset imports
import { Container } from 'react-bootstrap'


//home page contents
function Home() {

  return (
    <div className= "page">
      <h1 className="page-title">Home</h1>
      <Container className = "top-container">
        <TextBlurb content={'Hello! I\'m Sebastian Lanz, aka [#22d1ce]Mr.Neptune[/], and welcome to my website! I\'m a [#22d1ce]game developer[/] and [#22d1ce]full-stack software engineer[/].'} 
           textColor='white'/>
      </Container>
      
      <Container className = "project-container">

      </Container>
    </div>
  )
}

export default Home
