import React from "react";
import Image from "next/image";

interface TechIcon {
  src: string;
  alt: string;
}

interface ProjectsArray {
  techIcon?: TechIcon;
  projectImg?: TechIcon;
  alt: string;
}

interface Props {
  projectIcons: ProjectsArray[];
}

const ProjectsIcons: React.FC<{
  projectIcons: TechIcon[];
  projectImage?: TechIcon;
}> = ({ projectIcons, projectImage }) => {
  if (!projectIcons || projectIcons.length === 0) {
    return <p>No Projects avilable</p>;
  }

  return (
    <div className="mb-[3rem] md:mb-[1.3rem] ms:mb-[1rem] lg:mb-[3rem]">
      <div className="flex flex-wrap gap-4 mb-11">
        {projectIcons.map(({ src, alt }, index) => (
          <div
            key={index}
            className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[6%] flex items-center justify-center"
          >
            <Image
              src={src}
              alt={alt}
              width={500}
              height={300}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
      {projectImage && (
        <div className="relative w-full aspect-[1792/1024] overflow-hidden rounded-xl transform cursor-pointer hover:rotate-6 transition-all">
          <Image
            src={projectImage.src}
            alt={projectImage.alt}
            fill
            className="object-cover"
            priority
            sizes="(min-width:1024px) 800px, 100vw"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsIcons;
