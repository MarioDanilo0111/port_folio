import React from "react";

import { StaticImageData } from "next/image";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  skill1Imagen: StaticImageData;
  skill2Imagen: StaticImageData;
  skill3Imagen: StaticImageData;
  skill4Imagen: StaticImageData;
}

const SkillsLanguage: React.FC<Props> = ({
  skill1,
  skill2,
  skill3,
  skill4,
  level1,
  level2,
  level3,
  level4,
  skill4Imagen,
  skill1Imagen,
  skill2Imagen,
  skill3Imagen,
}) => {
  const radius = 45;
  const circleCircumference = 2 * Math.PI * radius;

  const getStrokeDashoffset = (level: number) => {
    return circleCircumference - (level * circleCircumference) / 100;
  };

  const skillsData = [
    { skill: skill1, image: skill1Imagen, level: level1 },
    { skill: skill2, image: skill2Imagen, level: level2 },
    { skill: skill3, image: skill3Imagen, level: level3 },
    { skill: skill4, image: skill4Imagen, level: level4 },
  ];
  return (
    <div className="grid  w-[100%] h-[100%]  grid-cols-4 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
      {skillsData.map(({ skill, image, level }, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-[100%] h-[100%] md:w-[2.3rem] md:h-[2.3rem] lg:w-[2.9rem] lg:h-[2.9rem]"
        >
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e0e0e0"
              strokeWidth="10"
              fill="none"
              className="opacity-35"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#4caf50"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circleCircumference}
              strokeDashoffset={getStrokeDashoffset(level)}
              className="transform -rotate-90 origin-center"
            />
          </svg>
          <img
            src={image.src}
            alt={`${skill} icon`}
            className="relative z-10 w-[50%] h-[50%]"
          />
          {/* <span className="absolute text-white text-xs md:text-sm lg:text-base">
            {level}
          </span> */}
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;
