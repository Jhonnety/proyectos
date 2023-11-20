import { Routes, Route } from 'react-router-dom'
import { ProjectsRoutes } from './ProjectsRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<ProjectsRoutes />}/>
        </Routes>
    </>
  )
}
