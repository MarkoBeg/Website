import React, { useState, useEffect } from "react";
import { sliderData } from "../../dummyData/dummyData";
import TopMidButton from "./TopMidButton";
import tie from "../../assets/images/tie.svg";
import hotelService from "../../assets/images/hotel-service.svg";
import task from "../../assets/images/subtask.svg";
import { motion } from "framer-motion";

import TopMidChild from "./TopMidChild";

const TopMidSection = ({ theme }) => {
  const buttons = [
    {
      id: "1",
      img: hotelService,
      name: "Service",
    },
    {
      id: "2",
      img: tie,
      name: "Management",
    },
    {
      id: "3",
      img: task,
      name: "Businesses",
    },
  ];

  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);

  const filter = (button) => {
    const filterData = sliderData.filter((type) => type.id === button);
    setData(filterData) || setSelected(button);
  };

  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((item) => item.id === "1"));
    };
    putData(sliderData);
  }, [sliderData]);

  return (
    <div className="lg:pt-8 md:pt-0 sm:pt-12  mx-auto pt-72   ">
      <div className="md:grid-cols-1 sm:grid-cols-1 mx-auto w-full grid grid-cols-2 justify-center items-center  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="sm:w-full w-4/5 mx-auto pl-20    "
        >
          <h2
            className={
              theme === "dark"
                ? "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-3/4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                : "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-3/4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle"
            }
          >
            We solve{" "}
            <span className="sm:text-headerTitle md:text-headerTitle lg:text-headerTitle text-seaBlue  ">
              problems
            </span>{" "}
            you never knew you <span className="sm:text-headerTitle ">had</span>
          </h2>
          <TopMidButton
            buttons={buttons}
            filter={filter}
            selected={selected}
          ></TopMidButton>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="sm:w-4/5 sm:mx-auto md:mx-auto ml-20 pb-4 mx-auto h-full bg-slate w-8/12 rounded-xl  drop-shadow-2xl "
        >
          <TopMidChild data={data}></TopMidChild>
        </motion.div>
      </div>
    </div>
  );
};

export default TopMidSection;
