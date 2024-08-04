import React from "react";
import { StaticImageData } from "next/image";

interface skillsArray {
  skill: string;
  level: number;
  skillImagen?: StaticImageData;
}

interface Props {
  skills: skillsArray[];
}

const SkillsLanguage: React.FC<Props> = ({ skills: skillsData }) => {
  const radius = 45;
  const circleCircumference = 2 * Math.PI * radius;

  const getStrokeDashoffset = (level: number) => {
    return circleCircumference - (level * circleCircumference) / 100;
  };

  return (
    <div className="grid  w-[100%] h-[100%]  grid-cols-4 md:grid-cols-4 lg:grid-cols-4 justify-items-center">
      {skillsData.map(({ skill, skillImagen, level }, index) => (
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
          {skillImagen && (
            <img
              src={skillImagen.src}
              alt={`${skill} icon`}
              className="relative z-10 w-[50%] h-[50%]"
            />
          )}
          {/* <span className="absolute text-white text-xs md:text-sm lg:text-base">
              {level}
              </span> */}
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;
