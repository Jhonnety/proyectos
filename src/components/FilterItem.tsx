import { Link, useLocation } from "react-router-dom"
import queryString from 'query-string'

interface FilterProps {
    filterName: string
    classIcon: string,
    faculdTitle: string,
    color:string,
}


export const FilterItem : React.FC<FilterProps> = ({filterName, classIcon, faculdTitle, color }) => {

  const location = useLocation();
  const { filter = '' } = queryString.parse(location.search);
  
  return (

    <Link className={`filterItem ${filter == filterName ? 'activeFilter' : ''}`} to={`/proyectos/?filter=${filterName}`}>
       <i style={{ backgroundColor: color }} className={`filterIcon ${classIcon}`}></i>
       <p style={{ color: color }} className='filterTitle'>{faculdTitle}</p>
    </Link>

  )
}
