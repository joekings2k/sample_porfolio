import React from "react";
import { motion } from "framer-motion";
import { listvariants, menuSlide } from "@/components/anim";
import MenuItem from "./sidebarcomponents/menuItems";
import { navItems } from "@/constants";
import Curve from "./sidebarcomponents/curve";


const Sidebar = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[red] fixed right-0 top-0 text-white "
      style={{ width: "25rem", zIndex: 1 }}
    >
      <motion.div className="flex flex-col items-center gap-10 mt-40">
        {navItems.map((item:any, index:number) => (
          <MenuItem title={item.title} link={item.link} index={index} />
        ))}
      </motion.div>
      <Curve />
    </motion.div>
  );
};

export default Sidebar;
