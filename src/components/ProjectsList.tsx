//import { useLocation } from "react-router-dom";
//import queryString from 'query-string'
import { ProjectPreview } from ".";

export const ProjectsList = () => {

    //const location = useLocation();
    //const { filter = '' } = queryString.parse(location.search);

  return (
    <div className="projectsListMainContainer">
    
       <ProjectPreview 
       url="https://media.istockphoto.com/id/1401460590/es/foto/hombre-de-negocios-trabajando-en-una-computadora-port%C3%A1til-con-%C3%ADcono-de-administraci%C3%B3n-de.jpg?s=612x612&w=0&k=20&c=mWmY60IABgxHH6Ja6GP9J9ZZO5kb_uNCXT2WYOfI9Sw="
       title="Especificación de requisitos: un método para el análisis de software"
       />
     <ProjectPreview 
       url="https://cdn.pixabay.com/photo/2017/07/20/15/21/chickens-2522623_1280.jpg"
       title="Acceso a la justicia, a la información y a la participación democrática para la protección de derechos colectivos y del ambiente: Fase IV - Ejercicio de los derechos de acceso en asuntos ambientales por parte de las Corporaciones Autónomas Regionales del Sistema Nacional Ambiental – SINA "
       />
            <ProjectPreview 
       url="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg"
       title="Actitudes sobre la salud mental en hombres de mediana edad del área metropolitana del valle de Aburrá (30 a 55 años) "
       />
            <ProjectPreview 
       url="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
       title="Análisis comparativo modelo de microfinanzas Colombia y México"
       />
            <ProjectPreview 
       url="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg"
       title="Análisis de las tensiones y desafíos de la inteligencia artificial en los procesos de aprendizaje y evaluación en educación superior"
       />
            <ProjectPreview 
       url=""
       title=""
       />
            <ProjectPreview 
       url=""
       title=""
       />

    </div>
  )
}
