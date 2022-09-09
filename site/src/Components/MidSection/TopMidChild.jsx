import React from "react";
import { motion } from "framer-motion";

const TopMidChild = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <h3
                className="lg:text-3xl  sm:text-3xl w-72 text-5xl pt-10 pb-4 font-bold font-inter no-underline 
              align-middle tracking-wide normal-case leading-none text-white pl-8  "
              >
                {item.title}
              </h3>
              <p
                className="sm:text-base block w-9/12 font-inter font-medium leading-normal 
              no-underline align-middle	 tracking-wide normal-case text-xl text-white pl-8 "
              >
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMidChild;
