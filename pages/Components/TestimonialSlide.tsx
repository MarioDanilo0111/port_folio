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
        link="https://www.linkedin.com/in/johnny-%C3%B6stman-55b21a1/"
      />
      <Fedback
        image="/images/juan.jpg"
        name="Juan E Fernandez"
        role="Software Engineer"
        textFed="As a close family member and fellow developer, I've closely observed Mario's impressive dedication and skill set. His innovative approach and enthusiasm for technology are truly inspiring. Mario's collaborative spirit and positive outlook make him a valuable asset in any team. His commitment and trustworthiness are commendable, making me fully confident in recommending him for any endeavor in the tech world."
        link="https://www.linkedin.com/in/juanfz/"
      />
      <Fedback
        image="/images/irena.jpg"
        name="Irena Levkova"
        role="SAP Application Consultant at Capgemini"
        textFed="I've had the pleasure of working with Mario and am consistently impressed by his dedication and skill as a developer. Mario exhibits a forward-thinking mindset, demonstrating initiative and enthusiasm in every project. His positive attitude and ability to inspire teamwork makes him a valuable asset to any team. He is not only trustworthy but also deeply committed to his responsibilities, making him highly recommended for any endeavor he chooses to pursue."
        link="https://www.linkedin.com/in/irenalevkova/"
      />
      <Fedback
        image="/images/bo.jpg"
        name="Bo Sandberg"
        role="Counsellor"
        textFed="I highly recommend this individual for their exceptional forward-thinking and self-driven nature. Their enthusiasm and positive outlook significantly contribute to a productive work environment, inspiring those around them. They are proactive, taking initiative in tasks with a strong sense of loyalty and trustworthiness, making them a valuable asset to any team."
        link=""
      />
      <Fedback
        image="/images/henrik.webp"
        name="Henrik Chiang"
        role="Android Developer at Sigma Technology Cloud AB"
        textFed="I've witnessed first-hand the exceptional dedication and effort [Name] puts into their studies and tasks. Their commitment to excellence is evident in every achievement, approaching each challenge with a well-strategized and thorough method. [Name]'s ability to harmonize within any team is remarkable, always mindful and considerate of their peers, creating a positive and supportive work environment. I'm confident [Name] would be an invaluable asset to any team, bringing not only their skills but also a commendable work ethic and interpersonal awareness."
        link="https://www.linkedin.com/in/henrik-chiang-00185ba6/"
      />
    </Carousel>
  );
};

export default TestimonialSlide;
