import React from "react";
import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  return (
    <section id="review">
      <div className="bg-[#02050a] pt-[7rem] md:pt-[8rem] pb-[3.3rem] ">
        <h1 className="heading">
          Client <span className="text-yellow-400">Review</span>
        </h1>
        <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto ">
          {/*Testimonial Slide*/}
          <TestimonialSlide />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
