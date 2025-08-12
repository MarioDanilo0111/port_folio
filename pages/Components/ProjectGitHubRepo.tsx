import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  linkRepo: string;
  linkDeploy?: string;
  gitHubIconSrc: string;
  gitHubIconAlt: string;
  netLifyIcon?: string;
  netlifyIconAlt?: string;
}

const ProjectGitHubRepo = ({
  title,
  linkRepo,
  linkDeploy,
  gitHubIconSrc,
  gitHubIconAlt,
  netLifyIcon,
  netlifyIconAlt,
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
        <div className="flex flex-row item-center gap-3 !flex_nowrap">
          <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
            <Image
              src={gitHubIconSrc}
              alt={gitHubIconAlt}
              width={40}
              height={40}
            />
          </div>

          {linkDeploy && netLifyIcon && (
            <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]">
              <Image
                src={netLifyIcon}
                alt={netlifyIconAlt ?? "Live deploy"}
                width={40}
                height={40}
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProjectGitHubRepo;
