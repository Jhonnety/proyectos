import { Routes, Route, Navigate } from 'react-router-dom'
import { Contact, Others, Projects, Start } from '../pages'
import { Footer, Header } from '../components'

export const ProjectsRoutes = () => {

  return (
    <>
        <Header />
        <Routes>
    
            <Route path="/inicio" element={<Start />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/otros" element={<Others />} />
            <Route path="/*" element={<Navigate to="/start" />} />
   
        </Routes>
        <Footer/>
    </>
  )
}
