import { NavLink, useLocation } from "react-router-dom";
import ODS from '../assets/icons/ODS'
import LazyLoad from 'react-lazy-load';
import { data } from "../utils/Data";

import { Project } from "../models/ProjectModel";
import facultadPsicologia from '../assets/images/facultadpsicologia.png'
import { capitalizeFirstLetter, capitalizeWords, extractNumbers, transformString } from "../utils/Functions";



export const ProjectDescription = () => {
  const location = useLocation();
  const pathnameArray = location.pathname.split('/');
  const projectUrl = pathnameArray[pathnameArray.length - 1];

  const filteredProjects = data.filter((project: Project) => {
    return (project.ID_PROYECTO + "") == projectUrl;
  });

  const project = filteredProjects[0]


  var groups = [""]

  if (project) {
    groups = [project.GRUPO_INVESTIGACION_1 as string,
    project.GRUPO_INVESTIGACION_2 as string, project.GRUPO_INVESTIGACION_3 as string]
  }

  return (
    <>
      {project ? (
        <div className="projectDescriptionMainContainer">

          <div className="imageMain">
            <LazyLoad>
              <img src={facultadPsicologia} className='imagenCentroInvestigaciones' />
            </LazyLoad>
            <h1 className='projectTitle'>Título del proyecto:</h1>
          </div>

          <div className='proyectsContainer'>

            <h2 className='proyectsIntroduction'>{project.NOMBRE_PROYECTO}</h2>

            <div className="projectBody">
              <div className="videoObjectiveContainer">

                <LazyLoad className="lazyLoadContainer">
                  <img loading="lazy" src={project.IMAGEN as string} alt="Imagen del proyecto." />
                </LazyLoad>
                <div className="informationProjectContainer">
                  <h3>Resumen:</h3>
                  <p>{project.RESUMEN}</p>
                  <h3 className="marginTop">Objetivo:</h3>
                  <p>{project.OBJETIVO}</p>

                </div>
              </div>

              <div className="adscriptionsContainer">
                <div className="adscriptions">

                  {project.DISPONIBLE &&
                    <div className="auxiliarsContainer">
                      <i className="fa-light fa-telescope"></i>
                      <h3><b>¿Quieres ser auxiliar de investigación en este proyecto?</b> Envía un correo a los investigadores para iniciar el proceso.</h3>
                    </div>
                  }

                  <h3>Adscripciones: </h3>
                  {[...Array(11).keys()].map((index: number) => {
                    const programKey = `PROGRAMA_${index + 1}` as keyof Project;
                    const unitKey = `PROGRAMA_UNIDAD_${index + 1}` as keyof Project;

                    const program = project[programKey] as string;
                    const unit = project[unitKey] as string;

                    if (program && unit) {
                      return (
                        <div key={index}>
                          <div className="line"></div>
                          {program && <p><b>Programa:</b> {transformString(program)}</p>}
                          {unit && <p><b>Facultad:</b> {transformString(unit)}</p>}
                        </div>
                      );
                    }
                    return null;
                  })}

                </div>


                <div className="researchersGroupsContainer">
                  <h3>Grupos de investigación: </h3>

                  {
                    groups.map((valor, indice, array) => {
                      if (valor && (array.indexOf(valor) !== -1 && array.indexOf(valor) === indice)) {
                        return (
                          <div key={indice}>
                            <div className="line"></div>
                            <p>{(valor as string).toUpperCase()}</p>
                          </div>
                        );
                      }
                      return null;
                    })
                  }

                  <h3 className="marginTop">Investigadores : </h3>
                  {[...Array(11).keys()].map((index: number) => {
                    const researcher_key = `ADSCRIPCION_${index + 1}` as keyof Project;
                    const kind_researcher_key = `ADSCRIPCION_TIPO_${index + 1}` as keyof Project;
                    const email_researcher_key = `ADSCRIPCION_CORREO_${index + 1}` as keyof Project;

                    const researcher = project[researcher_key] as string;
                    const kind_researcher = project[kind_researcher_key] as string;
                    const email_researcher = project[email_researcher_key] as string;

                    if (researcher && kind_researcher) {
                      return (
                        <div key={index}>
                          <div className="line"></div>
                          {researcher && <p><b>Nombre:</b> {capitalizeWords(researcher)}</p>}
                          {kind_researcher && <p><b>Tipo:</b> {capitalizeFirstLetter(kind_researcher)}</p>}
                          {email_researcher && <p><b>Correo:</b> {email_researcher}</p>}
                        </div>
                      );
                    }
                    return null;
                  })}

                </div>
              </div>


              {project.OBJETIVOS_DESARROLLO_SOSTENIBLE != null &&
                <div className="odsContainer">
                  <h3>ODS:</h3>
                  <div className="ods">

                    {
                      extractNumbers(project.OBJETIVOS_DESARROLLO_SOSTENIBLE as string).map((x: number) => {
                        return (<LazyLoad key={x}><img loading="lazy" className="odsItem" src={ODS[`ods${x}`]} /></LazyLoad>)
                      })
                    }


                  </div>

                </div>
              }

            </div>

          </div>

        </div>

      ) : (
        <div className="noProjectDescriptionMainContainer">
          <h1 className="titleNoExist">Proyecto no encontrado</h1>
          <NavLink to={`/proyectos`}>
            <button className="btnSeeProjects">Ver proyectos</button>
          </NavLink>
        </div>
      )}
    </>
  );
}