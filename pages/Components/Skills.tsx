import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        <div className="">
          <SkillsItem
            title="Front End Developer"
            fundation="KYH Stockholm"
            year="2021 - 2023"
            description="Completed a web development program with a focus on Front-End technologies. This program has equipped me for roles such as Front-End Developer, JavaScript Developer, and Web Developer. Strong emphasis on real-world applications, training on preparing to work effectively as a developer in professional settings."
          />
          <SkillsLanguage
            skill1="JavaScript"
            skill2="HTML5"
            skill3="CSS3"
            skill4="GIT"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[80%]"
          />
        </div>
        <div className="">
          <SkillsItem
            title="TypeScriprt Studies"
            fundation="Medie Institutet"
            year="2023"
            description="Advanced TypeScript knowledge for seasoned programmers, emphasizing quality assurance, code validation, and object-oriented programming practices. 
            Expertise in transpiling JavaScript with TypeScript to ensure robust, maintainable, and scalable code."
          />
          <SkillsLanguage
            skill1="TYPES"
            skill2="INTERFACE"
            skill3="UNIONS"
            skill4="MODULES"
            level1="w-[90%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[79%]"
          />
        </div>
        <div className="">
          <SkillsItem
            title="Programming 1 with C#"
            fundation="NTI School"
            year="2019 - 2020"
            description="This foundational course offered a step-by-step introduction to programming with C#, tailored for beginners. It starts with essential planning techniques using pseudo-code and flowcharts to map out problem-solving strategies. Participants could then progress to the basics of C#, establishing a strong foundation in core programming concepts and laying the groundwork for further development and more complex projects."
          />
          <SkillsLanguage
            skill1="Console Environment"
            skill2="Control Structures"
            skill3="Arrays"
            skill4="Principles of O.O.P."
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
            level4="w-[86%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
