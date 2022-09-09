import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileDropText = ({ uniqueTitle, title, img, text, iconInfo, link }) => {
  const DropDownVariant = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" flex items-center ">
      <Link to={"/" + link}>
        <motion.div
          className="sm:grid  flex items-center justify-center content-center"
          transition={{ type: "spring", duration: 2 }}
          variants={DropDownVariant}
        >
          <h6 className=" text-base font-semibold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle">
            {uniqueTitle}
          </h6>
          <div className=" mr-4">
            <img className="sm:h-4 h-6" src={img} alt={iconInfo}></img>
          </div>
          <div className="pt-4">
            <h3 className="sm:text-sm text-sm font-medium font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle">
              {title}
            </h3>
            <p className="sm:text-xs pb-2 font-inter font-extralight leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-sm">
              {text}
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default MobileDropText;
