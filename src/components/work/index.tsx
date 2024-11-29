import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../card";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const MyWork = () => {
  const arr = [1, 2, 3, 4];
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const [motionDivWidth, setMotionDivWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

  
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useLayoutEffect(() => {
    const updateMotionDivWidth = () => {
      if (motionDivRef.current) {
        setMotionDivWidth(motionDivRef.current.scrollWidth); 
      }
    };

    updateMotionDivWidth();
    window.addEventListener("resize", updateMotionDivWidth);

    return () => window.removeEventListener("resize", updateMotionDivWidth);
  }, []);

  const sectRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectRef,
    offset: ["start start", "end start"],
  });

  
  const endTransformValue = Math.min(0, screenWidth - motionDivWidth - 500); 
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", `${endTransformValue}px`]
  );

  return (
    <div>
      <h1>MyWork</h1>
      <div className="h-[350vh] relative" ref={sectRef}>
        <div className="sticky top-0 h-screen bg-orange-600 sm:overflow-x-auto">
          <motion.div
            className="flex items-center h-full gap-5 "
            style={{ x }}
            ref={motionDivRef}
          >
            {arr.map((item) => (
              <div key={item} className="flex-shrink-0">
                {/* <Card /> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
