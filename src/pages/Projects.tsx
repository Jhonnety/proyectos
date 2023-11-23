import centroInvestigaciones from '../assets/images/centroinvestigaciones.png'
import {FilterItem, ProjectsList} from '../components'
import { Filter } from '../models/FilterMode'
import { filters } from '../utils/FilterData'

export const Projects = () => {

  return (
    <div className="projectsMainContainer">

      <div className="imageMain">
        <img src={centroInvestigaciones} className='imagenCentroInvestigaciones'/>
        <h1 className='projectTitle'>Proyectos 2024</h1>
      </div>


      <div className='proyectsContainer'>

        <h2 className='proyectsIntroduction'>Selecciona la facultad o centro regional para revisar la información de los proyectos de investigación para el año 2024. Además, busca el ícono naranja que indica aquellos proyectos en los que puedes participar como auxiliar de investigación.</h2>
        
        <div className='facultadFilter'>

          {
            filters.map((filter:Filter)=>{
              return (
                <FilterItem 
                  key={filter.filterName}
                  color={filter.color}
                  filterName={filter.filterName}
                  classIcon={filter.classIcon}
                  faculdTitle={filter.faculdTitle}/>
              )
            })
          }
          
        </div>

        <ProjectsList />

      </div>
    
    </div>
  )
}
