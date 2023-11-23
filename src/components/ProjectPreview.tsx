import { Project } from "../models/ProjectModel"
import { NavLink } from 'react-router-dom';

interface ProjectPreviewProps {
  project: Project
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {

  return (
    <NavLink className="navLinkProjectPreview" to={`/proyectos/${project.ID_PROYECTO}`}>
      <div className="ProjectPreviewContainer">
        <div className="backgrounGray"></div>
        <img loading="lazy" className="ProjectPreviewImagen" src={project.IMAGEN + ""} alt="Portada del proyecto" />
        <h2 className="ProjectPreviewTitle">{project.NOMBRE_PROYECTO}</h2>
        {project.DISPONIBLE &&
          <h2 className="researcherHelpers"><i className="fa-solid fa-telescope"></i>Proyecto en el que puedes participar como auxiliar de investigación</h2>
        }
      </div>
    </NavLink>
  )
}
