import { NavLink, useLocation } from "react-router-dom";
import ODS from '../assets/icons/ODS'

import { data } from "../utils/Data";

import { Project } from "../models/ProjectModel";
import facultadPsicologia from '../assets/images/facultadpsicologia.png'

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const capitalizeWords = (str: string) => {
  let lowercaseString = str.toLowerCase();
  let words = lowercaseString.split(' ');
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let result = capitalizedWords.join(' ');

  return result;
};
const extractNumbers = (str: string) => {
  let foundNumbers = str.match(/\d+/g);
  if (foundNumbers) {
    let numbers = foundNumbers.map(number => parseInt(number, 10));
    return numbers;
  } else {
    return [];
  }
};



export const ProjectDescription = () => {
  const location = useLocation();
  const pathnameArray = location.pathname.split('/');
  const projectUrl = pathnameArray[pathnameArray.length - 1];

  const filteredProjects = data.filter((project: Project) => {
    return (project.ID_PROYECTO + "") == projectUrl;
  });

  const project = filteredProjects[0]

  const groups = [project.GRUPO_INVESTIGACION_1,
  project.GRUPO_INVESTIGACION_2, project.ADSCRIPCION_3]

  return (
    <>
      {project ? (
        <div className="projectDescriptionMainContainer">

          <div className="imageMain">
            <img src={facultadPsicologia} className='imagenCentroInvestigaciones' />
            <h1 className='projectTitle'>Titulo del proyecto:</h1>
          </div>

          <div className='proyectsContainer'>

            <h2 className='proyectsIntroduction'>{project.NOMBRE_PROYECTO}</h2>

            <div className="projectBody">
              <div className="videoObjectiveContainer">

                <img src={project.IMAGEN as string} alt="Imagen del proyecto." />
                <div className="informationProjectContainer">
                  <h3>Resumen:</h3>
                  <p>{project.RESUMEN}</p>
                  <h3 className="marginTop">Objetivo:</h3>
                  <p>{project.OBJETIVO}</p>

                </div>
              </div>

              <div className="adscriptionsContainer">
                <div className="researchersGroupsContainer">
                  <h3>Grupos de investigacion: </h3>

                  {
                    groups.map((valor, indice, array) => {
                      if (valor && (array.indexOf(valor) !== -1 && array.indexOf(valor) === indice)) {
                        return (
                          <div key={indice}>
                            <div className="line"></div>
                            <p>{capitalizeFirstLetter(valor as string)}</p>
                          </div>
                        );
                      }
                      return null;
                    })
                  }

                  <h3 className="marginTop">Investidores: </h3>
                  {[...Array(11).keys()].map((index: number) => {
                    const researcher_key = `ADSCRIPCION_${index + 1}` as keyof Project;
                    const kind_researcher_key = `ADSCRIPCION_TIPO_${index + 1}` as keyof Project;

                    const researcher = project[researcher_key] as string;
                    const kind_researcher = project[kind_researcher_key] as string;

                    if (researcher && kind_researcher) {
                      return (
                        <div key={index}>
                          <div className="line"></div>
                          {researcher && <p><b>Nombre:</b> {capitalizeWords(researcher)}</p>}
                          {kind_researcher && <p><b>Tipo:</b> {capitalizeFirstLetter(kind_researcher)}</p>}
                        </div>
                      );
                    }
                    return null;
                  })}

                </div>
                <div className="adscriptions">
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
                          {program && <p><b>Programa:</b> {capitalizeFirstLetter(program)}</p>}
                          {unit && <p><b>Facultad:</b> {capitalizeFirstLetter(unit)}</p>}
                        </div>
                      );
                    }
                    return null;
                  })}


                </div>
              </div>
              <div className="researchersContainer">

              </div>

              <div className="odsContainer">
                <h3>ODS:</h3>
                <div className="ods">

                  {
                    extractNumbers(project.OBJETIVOS_DESARROLLO_SOSTENIBLE as string).map((x: number) => {
                      return (<img className="odsItem" src={ODS[`ods${x}`]} />)
                    })
                  }


                </div>

              </div>

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