import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
  name: string;
  role: string;
  image: string;
  textFed: string;
  link: string;
}

const Feedback = ({ name, role, image, textFed, link }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto mb-[2rem] rounded-full object-contain"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
      </div>
      {link ? (
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          href={link}
          target="_blank"
        >
          <div className="flex flex-row justify-center items-center hover:scale-105 duration-300">
            <div className="ml-[1.3rem] mt-[1.3rem]">
              <Image
                width={20}
                height={20}
                className="md:w-[1.9rem] md:h-[1.9rem] w-[1.3rem] h-[1.3rem] color-white  filter brithness-200 invert bg-white"
                src="/images/linkedin.svg"
                alt="Linkedin"
              />
            </div>
          </div>
        </a>
      ) : (
        <h1 className="text-[29px] text-white mt-[1rem]">{name}</h1>
      )}
      <div className="w-full md:w-[90%] lg:w-[75%] xl:w-[60%] 2xl:w-[50%] mx-auto">
        <p className="role text-[18px] text-white opacity-75 mt-[0.5rem] mb-[3rem] mx-4 sm:mx-6 md:mx-8 break-words">
          {role}
        </p>
      </div>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto break-words">
        {textFed}
      </p>
    </div>
  );
};
export default Feedback;
