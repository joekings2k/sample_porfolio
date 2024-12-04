import { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { animate, delay, motion, useInView } from "framer-motion";
interface Props {
  image: StaticImageData;
  title: string;
  stack: string[];
}
const Card = ({ image, title, stack }: Props) => {
  const ref = useRef<any>();
  const isInview = useInView(ref,{once:false});
  const textVarients = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <div
      className="w-[65vw] h-[80vh] flex justify-center items-center"
      ref={ref}
    >
      <div
        className="w-[65vw] h-[80vh] relative"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "15px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-[15px] z-10" />
        <motion.aside
          className="relative flex flex-col justify-end h-full w-full text-white p-4 z-20"
          // variants={textVarients}
          // animate={isInview ? "animate" : "initial"}
        >
          <motion.h3
            className="text-2xl"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{once:true}}
          >
            {title}
          </motion.h3>
          <ol className="flex space-x-4 mt-2">
            {stack.map((item: string, i: number) => (
              <motion.div
                className="text-[1.5rem] border-2  rounded-3xl relative overflow-hidden group"
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1}}
                key={i}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
                viewport={{once:true}}
              >
                <motion.div
                  className="bg-cyan-300 rounded-3xl h-full"
                  initial={{ width: "0%" }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ width: "100%" }}
                >
                  <li
                    key={i}
                    className="px-5 z-10 whitespace-nowrap group-hover:text-black"
                  >
                    {item}
                  </li>
                </motion.div>
              </motion.div>
            ))}
          </ol>
        </motion.aside>
      </div>
    </div>
  );
};

export default Card;
