import centroInvestigaciones from '../assets/images/centroinvestigaciones.png'
import {Filter, ProjectsList} from '../components'

export const Projects = () => {

  return (
    <div className="projectsMainContainer">

      <div className="imageMain">
        <img src={centroInvestigaciones} className='imagenCentroInvestigaciones'/>
        <h1 className='projectTitle'>Proyectos 2024</h1>
      </div>


      <div className='proyectsContainer'>

        <h2 className='proyectsIntroduction'>Estos son los proyectos que se han sumado a esta iniciativa</h2>
        
        <div className='facultadFilter'>

          <Filter 
          color='#104073'
          filterName=''
          classIcon='fa-light fa-earth-americas' 
          faculdTitle='Todos'/>

          <Filter 
          color='#1C5D8B'
          filterName='ciencitas_administrativas_economicas_y_contables'
          classIcon='fa-light fa-hands-holding-dollar' 
          faculdTitle='Ciencias Administrativas, Económicas y Contables'/>

          <Filter 
          color='#2682A3'
          filterName='comunicacion_publicidad_y_diseno'
          classIcon='fa-light fa-newspaper' 
          faculdTitle='Comunicación, Publicidad y Diseño'/>

          <Filter 
          color='#3198BA'
          filterName='derecho_y_ciencias_politicas'
          classIcon='fa-light fa-landmark' 
          faculdTitle='Derecho y Ciencias Políticas'/>

          <Filter 
          color='#659C7B'
          filterName='educacion_y_humanidades'
          classIcon='fa-light fa-chalkboard-user' 
          faculdTitle='Educación y Humanidades'/>

          <Filter 
          color='#97C333'
          filterName='ingenierias_y_arquitectura'
          classIcon='fa-light fa-user-helmet-safety' 
          faculdTitle='Ingenierías y Arquitectura'/>

          <Filter 
          color='#57A432'
          filterName='ciencias_sociales_salud_y_bienestar'
          classIcon='fa-light fa-head-side-brain' 
          faculdTitle='Ciencias Sociales, Salud y Bienestar'/>

          <Filter 
          color='#136D30'
          filterName='centros_regionales'
          classIcon='fa-regular fa-map-location-dot' 
          faculdTitle='Centros regionales'/>

        
        </div>

        <ProjectsList />

      </div>
    
    </div>
  )
}
