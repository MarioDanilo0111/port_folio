import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
interface Props {
  name: string;
  role: string;
  image: string;
  textFed: string;
}

const Feedback = ({ name, role, image, textFed }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 " />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
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
