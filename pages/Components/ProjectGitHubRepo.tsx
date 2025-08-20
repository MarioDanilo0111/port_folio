import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  linkRepo: string;
  linkDeploy?: string;
  gitHubIconSrc: string;
  gitHubIconAlt: string;
  deployIcon?: string;
  deployIconAlt?: string;
}

const ProjectGitHubRepo = ({
  title,
  linkRepo,
  linkDeploy,
  gitHubIconSrc,
  gitHubIconAlt,
  deployIcon,
  deployIconAlt,
}: Props) => {
  return (
    <div className="flex pt-[2rem] mx-auto">
      <h2 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] font-bold text-white">
        {title}
      </h2>
      <div className="flex flex-row items-center gap-3 !flex-nowrap">
        <a
          href={linkRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center ml-3"
        >
          <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
            <Image
              src={gitHubIconSrc}
              alt={gitHubIconAlt}
              width={40}
              height={40}
            />
          </div>
        </a>

        {linkDeploy && deployIcon && (
          <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
            <a
              href={linkDeploy}
              target="_blank"
              rel="noopener noreferrer"
              arial-label="Open live Demo"
            >
              <Image
                src={deployIcon}
                alt={deployIconAlt ?? "Live deploy"}
                width={40}
                height={40}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGitHubRepo;
