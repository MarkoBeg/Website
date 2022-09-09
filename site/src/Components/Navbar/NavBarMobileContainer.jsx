import React from "react";
import { motion } from "framer-motion";

const NavBarMobileContainer = ({ children }) => {
  return (
    <div>
      {" "}
      <motion.div
        className="bg-white top-16 right-[8%]	 absolute  w-4/5 shadow-2xl z-50 hidden lg:block justify-center items-center mx-auto rounded-xl p-2 "
        initial="hidden"
        animate="visible"
        transition={{ type: "inertia", velocity: 50 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default NavBarMobileContainer;
