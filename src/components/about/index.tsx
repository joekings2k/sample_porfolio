import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Word } from "../SecondComponent/second";

const About = () => {
  const wordref = useRef<any>(null);
  const content =
    "I am a dedicated Full-Stack Developer with over 2 years of experience heavily focused on front-end development. I specialize in creating intuitive, responsive, and dynamic user interfaes,while ensuring seamless integration with back-end systems. My expertise includes modern JavaScript frameworks like React, and I am passionate about delivering optimized user experiences with clean, maintainable code. Constantly learning and adapting, I stay updated with the latest industry trends and best practices, always aiming to push the boundaries of web development.";
  const splitContent = content.split("");

  const { scrollYProgress } = useScroll({
    target: wordref,
    offset: ["start end", "end 0.8"],
  });

  return (
    <div className="w-full bg-black text-white px-[4rem]">
      <div> About me</div>
      <p
        className="text-[4rem] font-bold mt-[1rem] text-wrap"
        ref={wordref}
      >
        {splitContent.map((word, i) => {
          const start = i / splitContent.length;
          const end = (i + 1) / splitContent.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              scrollYProgress={scrollYProgress}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

export default About;
