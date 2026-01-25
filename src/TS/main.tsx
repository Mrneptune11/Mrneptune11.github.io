//Main page renders app component as the root

//library imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS imports
import '../CSS/index.css'

//App import
import App from './app.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)