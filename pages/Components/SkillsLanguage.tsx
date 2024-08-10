import React from "react";
import Image, { StaticImageData } from "next/image";

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

  if (!skillsData || skillsData.length === 0) {
    return <p>No Skills avilable</p>;
  }
  return (
    <div
      className="grid w-full h-full grid-cols-4 
    sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 justify-items-center gap-7 p-4"
    >
      {skillsData.map(({ skill, skillImagen, level }, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-[3.3rem] h-[3.3rem] sm:w-[2.3rem] sm:h-[2.3rem]  md:w-[2.3rem] md:h-[2.3rem] lg:w-[3.9rem] lg:h-[3.9rem] p-1  bg-slate-800 rounded-full"
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
            <Image
              src={skillImagen.src}
              alt={`${skill} icon`}
              width={50}
              height={50}
              className="relative z-10 max-w-[60%] max-h-[60%] object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;
