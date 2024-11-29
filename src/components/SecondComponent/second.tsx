"use client";
import React, { ReactNode, useRef } from "react";
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpg";
import image3 from "../../../public/image3.jpg";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { stat } from "fs";

const Second = () => {
  return (
    <div className="">
      <TextapralxContent url={image1.src}>gggg</TextapralxContent>
      <TextapralxContent url={image2.src}>gggg</TextapralxContent>
      <TextapralxContent url={image3.src}>gggg</TextapralxContent>
    </div>
  );
};

const imgPad = 12;

const TextapralxContent = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  return (
    <div>
      <div
        style={{ paddingLeft: imgPad, paddingRight: imgPad }}
        className="relative h-[150vh]"
      >
        <StickyImage url={url} />
        <Overlaycopy
          heading="the main g"
          subHeading="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for by accident, sometimes on purpose (injected humour and the like)."
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ url }: { url: string }) => {
  const imageref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: imageref,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={imageref}
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: `calc(100vh - ${imgPad * 2}px)`,
        scale,
        opacity,
        top: imgPad,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" />
    </motion.div>
  );
};
const Overlaycopy = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  const textRef = useRef<any>();
  const wordaniref = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressWord } = useScroll({
    target: wordaniref,
    offset: ["start end", "start start"], // Different offset for the second target
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const words = subHeading.split("");
  return (
    <motion.div
      className="absolute left-0 top-0 flex  h-screen w-full flex-col justify-center items-center text-slate-200 px-5"
      style={{ opacity }}
      ref={textRef}
    >
      <p className="text-ceter text-4xl font-bold " ref={wordaniref}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + i / words.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              scrollYProgress={scrollYProgressWord}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </motion.div>
  );
};
export const Word = ({
  children,
  range,
  scrollYProgress,
}: {
  children: any;
  range: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const splitLetter = children?.split("");

  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative whitespace-nowrap">
      {splitLetter.map((letter: string, i: number) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Letter
            key={i}
            range={[start, end]}
            scrollYProgress={scrollYProgress}
          >
            {letter}
          </Letter>
        );
      })}

      {/* <motion.span style={{ opacity }}>{children}</motion.span> */}
    </span>
  );
};

const Letter = ({
  children,
  range,
  scrollYProgress,
}: {
  children: ReactNode;
  range: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-[0.2]">{children} </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
export default Second;
