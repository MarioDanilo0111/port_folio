import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fedback from "./Fedback";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const TestimonialSlide = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <Fedback
        image="/images/joh.jpg"
        name="Johnny Östman"
        role="Site manager, CTO, 
        Developer managager,software developer/
        architect/DevOps/Agile/Azure"
        textFed="Due to Mario's social skills, willingness to cooperate and share knowledge, motivation,
drive, and big passion for frontend combined with his interest to learn new
techniques, also on the backend side, he would be a nice fit as a frontend developer,
or even a full stack developer T-shaped to frontend. I therefor warmly recommend him
to similar roles as I described above."
      />
      <Fedback
        image="/images/juan.jpg"
        name="Juan Enrique Fernandez"
        role="Software Engineer"
        textFed=""
      />
      <Fedback
        image="/images/irena.jpg"
        name="Irena Levkova"
        role="SAP Application Consultant at Capgemini"
        textFed=""
      />
      <Fedback
        image="/images/bo.jpg"
        name="Bo Sandberg"
        role="Counsellor"
        textFed=""
      />
    </Carousel>
  );
};

export default TestimonialSlide;
