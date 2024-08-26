import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  linkRepo: string;
  gitHubIconSrc: string;
  gitHubIconAlt: string;
}

const ProjectGitHubRepo = ({
  title,
  linkRepo,
  gitHubIconSrc,
  gitHubIconAlt,
}: Props) => {
  return (
    <div className="flex pt-[2rem] mx-auto">
      <a
        href={linkRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] font-bold text-white">
          {title}
        </h2>
        <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
          <Image
            src={gitHubIconSrc}
            alt={gitHubIconAlt}
            width={40}
            height={40}
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectGitHubRepo;
