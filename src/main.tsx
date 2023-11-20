import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProjectsApp } from './ProjectsApp'
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
