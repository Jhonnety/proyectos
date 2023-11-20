
interface ProjectPreviewProps {
    url: string,
    title:string,
}

export const ProjectPreview : React.FC<ProjectPreviewProps> = ({ url, title }) => {
  return (
    <div className="ProjectPreviewContainer">
        <img className="ProjectPreviewImagen" src={url} alt="Portada del proyecto"/>
        <h2 className="ProjectPreviewTitle">{title}</h2>
    </div>
  )
}
