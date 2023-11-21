import { Project } from "../models/ProjectModel"

interface ProjectPreviewProps {
  project: Project
}

export const ProjectPreview : React.FC<ProjectPreviewProps> = ({ project }) => {
  
  const handleProjectPreview = ()=>{
    window.alert(JSON.stringify(project));

  }
  
  return (
    <div className="ProjectPreviewContainer" onClick={handleProjectPreview}>
        <div className="backgrounGray"></div>
        <img loading="lazy" className="ProjectPreviewImagen" src={project.IMAGEN+""} alt="Portada del proyecto"/>
        <h2 className="ProjectPreviewTitle">{project.NOMBRE_PROYECTO}</h2>
    </div>
  )
}
