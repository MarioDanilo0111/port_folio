import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500,
        "web developer",
        1500,
        "Python AI Dev",
        1500,
        "designer",
        1500,
        "fullstack",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-semibold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
