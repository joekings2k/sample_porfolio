import React, { useState } from "react";


import AnimatedMenuButton from "./animatedMenuButton";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";

const Headers = () => {
  const [active, setActive] = useState<boolean>(false);
  console.log(active);
  return (
    <>
      {/* <Navbar /> */}
      <div className="fixed top-7 right-7 z-10">
        <AnimatedMenuButton active={active} setActive={setActive} />
      </div>
      <AnimatePresence mode="wait">{active && <Sidebar />}</AnimatePresence>
    </>
  );
};

export default Headers;
