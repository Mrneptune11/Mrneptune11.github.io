//This is the home page of my very cool portfolio wow

//react imports
import { Container } from 'react-bootstrap'

//CSS imports
import '../../CSS/app.css'

//component imports 
import { TextBlurb, ProjectCard } from '../components/component.tsx'

//type imports
import { type ProjectProps } from '../components/component.tsx'

//util imports
import { filterRenderTargets } from '../utility/project_filter.tsx'

//data imports 
import projectData from '../../Data/projects.json'


//home page contents
function Home() {

      const projects = projectData as Array<ProjectProps>
    const featuredProjects:Array<ProjectProps> = filterRenderTargets(projects, "featured")

  return (
    <div className= "page">
      <h1 className="page-title">Home</h1>
      <Container className = "top-container">
        <TextBlurb content={'Hello! I\'m Sebastian Lanz, aka [#22d1ce]Mr.Neptune[/], and welcome to my website! I\'m a [#22d1ce]game developer[/] and [#22d1ce]full-stack software engineer[/].'} 
           textColor='white'/>
      </Container>

      <Container className = "project-container">
        {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project}/>
        ))}
      </Container>
    </div>
  )
}

export default Home
