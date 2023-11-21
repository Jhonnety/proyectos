import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import { ProjectPreview } from ".";
import { data } from "../utils/Data";
import LazyLoad from 'react-lazy-load';
import { Project } from "../models/ProjectModel";
import { useState } from "react";
import Pagination from "./Pagination";

export const ProjectsList = () => {

    const location = useLocation();
    const { filter = '' } = queryString.parse(location.search);


    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const projectsToDisplay = data.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage:any) => {
      setCurrentPage(newPage);
    };

    return (
      <div className="projectsListMainContainer">
        {projectsToDisplay.map((project: Project) => (
          <LazyLoad key={project.ID_PROYECTO}>
            <ProjectPreview key={project.ID_PROYECTO} project={project} />
          </LazyLoad>
        ))}
  
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  };