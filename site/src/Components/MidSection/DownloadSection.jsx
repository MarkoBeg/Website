import React from "react";

import layingPhone from "../../assets/images/lyingPhone.png";
import { motion } from "framer-motion";

const DownloadSection = ({ theme }) => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="md:grid-cols-1 flex flex-col-reverse   justify-items-center items-center content-center w-full"
      >
        <div className="">
          <img
            className="sm:h-[250px] w-full mx-auto h-[525px]  header "
            src={layingPhone}
            alt="phone"
          ></img>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto pr-4 text-center">
          <h2
            className={
              theme === "dark"
                ? "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                : "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle "
            }
          >
            Download App
          </h2>
          <p
            className={
              theme === "dark"
                ? "lg:text-lg w-1/2 sm:text-base block font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-white text-2xl "
                : "lg:text-lg w-1/2 sm:text-base block font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-2xl "
            }
          >
            Simplicity and attention to details. Fluid client apps for both
            Android and iOS operating system. Optimized even for older devices.
            Download SimplifyStay App now and enjoy your next stay in full
            comfort.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadSection;
