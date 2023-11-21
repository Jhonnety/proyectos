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

        <h2 className='proyectsIntroduction'>Estos son los proyectos que se han sumado a esta iniciativa</h2>
        
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
