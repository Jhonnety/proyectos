import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import { ProjectPreview } from ".";
import { data } from "../utils/Data";
import LazyLoad from 'react-lazy-load';
import { Project } from "../models/ProjectModel";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { filters } from "../utils/FilterData";
import { Filter } from "../models/FilterMode";


const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const normalizeString = (str: string) => {
  return removeAccents(str.toLowerCase());
};


export const ProjectsList = () => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const filterUrl = queryParams.filter || '';
  

    const [dataFiltered, setDataFiltered] = useState(data)

    
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const projectsToDisplay = dataFiltered.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage:any) => {
      setCurrentPage(newPage);
    };

    useEffect(() => {
      console.log(filterUrl)
      if(filterUrl == ''){
        setDataFiltered(data)
      }
      else{
        filters.map((filter:Filter)=>{
          if(filter.filterName == filterUrl){

            if(filter.type == "facultad"){
              const newData = data.filter((project: Project) => {
                return Array.from({ length: 11 }, (_, index) => index + 1).some((unit) => {
                  const key = `PROGRAMA_UNIDAD_${unit}` as keyof Project;
                  return normalizeString(project[key]+"") == normalizeString(filter.excelName);
                });
              });
              setDataFiltered(newData)
            }else{

              const newData = data.filter((project: Project) => {
                return Array.from({ length: 11 }, (_, index) => index + 1)
                  .some((region) => {
                    const key = `PROGRAMA_REGION_${region}` as keyof Project;
                    return project[key] != null && normalizeString(project[key]+"") != normalizeString(filter.excelName);
                  });
              });
                          
              setDataFiltered(newData)
            }

          }
        })
      }
      setCurrentPage(1)
    }, [filterUrl])

    return (
      <div className="projectsListMainContainer">
        {projectsToDisplay.map((project: Project) => (
          <LazyLoad key={project.ID_PROYECTO}>
            <ProjectPreview key={project.ID_PROYECTO} project={project} />
          </LazyLoad>
        ))}
  
        <Pagination
          totalItems={dataFiltered.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  };