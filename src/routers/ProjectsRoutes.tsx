import { Routes, Route, Navigate } from 'react-router-dom'
import { Projects } from '../pages'
import { Footer, Header, ProjectDescription } from '../components'

export const ProjectsRoutes = () => {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/*" element={<ProjectDescription />} />
        <Route path="/*" element={<Navigate to="/proyectos" />} />

      </Routes>
      <Footer />
    </>
  )
}
