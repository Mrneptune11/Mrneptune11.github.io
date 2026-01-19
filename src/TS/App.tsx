import '../CSS/app.css'
import './component.tsx'
import { ProjectCard } from './component.tsx'
import networkJamImage from '../assets/network_jam.png'

function App() {

  return (
    <>
      <h1> # Home #</h1>
      <ProjectCard title="Network Jam!" description="This is a sample project description." 
        imgSrc={networkJamImage} refSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    </>
  )
}

export default App
