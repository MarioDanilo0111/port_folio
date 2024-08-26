import React from "react";
import ProjectsArray from "../../lib/ProjectsArray";
import ProjectGitHubRepo from "./ProjectGitHubRepo";
import ProjectsIcons from "./ProjectIcons";

const Projects = () => {
  return (
    <section id="project">
      {ProjectsArray.map((item, index) => (
        <div key={index} className="bg-[#02050a] pt-6 md:pt-8 pb-4">
          <h1 className="heading">
            {item.headerTitle}
            <span className="text-yellow-400">{item.spanHeaderTitle}</span>
          </h1>
          <div className="w-[90%] pt-[2rem] mx-auto grid items-center md:grid-cols-2 gap-8 ">
            {item.projects.map((project, projectIndex) => (
              <div key={projectIndex}>
                <div className="flex flex-row items-center">
                  <ProjectGitHubRepo
                    title={project.title}
                    linkRepo={project.linkRepo}
                    gitHubIconSrc={item.gitHubIcon.src}
                    gitHubIconAlt={item.gitHubIcon.alt}
                  />
                </div>

                <p className="text-[16px] text-slate-300 mx-auto mb-[1rem] ml-[1.9rem] ">
                  {project.description}
                </p>
                <div data-aos={project.dataAOS}>
                  <ProjectsIcons
                    projectIcons={project.techIcons}
                    projectImage={project.projectImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
