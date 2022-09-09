import React from "react";
import pay from "../../assets/images/pay.png";
import andro from "../../assets/images/andro.png";
import customize from "../../assets/images/customize1.png";
import graph from "../../assets/images/graph.png";
import { motion } from "framer-motion";

const MidComponentItem = ({ img, text, title, reverse, theme }) => {
  console.log("144", theme);
  return (
    <div>
      {reverse ? (
        <div className="md:grid-cols-1 sm:grid-cols-1 mx-auto grid grid-cols-2 justify-items-center items-center content-center w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            div
            className="w-4/5 mx-auto pl-20 sm:w-full  pr-10"
          >
            <h2
              className={
                theme === "dark"
                  ? " lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-3/4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                  : " lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-3/4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle"
              }
            >
              {title}
            </h2>
            <p
              className={
                theme === "dark"
                  ? "lg:text-lg sm:text-lg block  font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-2xl w-full  "
                  : "lg:text-lg sm:text-lg block  font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-2xl w-full  "
              }
            >
              {text}
            </p>
            <button className="sm:w-38 pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <img
              className="lg:h-[675px] sm:h-[550px] pt-10 hover:rotate-6 duration-1000 cursor-pointer "
              src={img}
              alt="phone"
            ></img>
          </motion.div>
        </div>
      ) : (
        <div className=" md:grid-cols-1  sm:flex flex-col-reverse justify-center  mx-auto pt-24 grid grid-cols-2 justify-items-center items-center content-center w-full   ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="w-4/5 "
          >
            <img
              className="hover:rotate-[-6deg] duration-1000 cursor-pointer sm:h-[530px]"
              src={img}
              alt="phone"
            ></img>
          </motion.div>
          <motion.div
            className="flex flex-col pl-20 justify-center item-center mx-auto content-center w-full "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h3
              className={
                theme === "dark"
                  ? "lg:text-4xl sm-text-3xl text-5xl pt-4 pb-4 w-2/3 font-bold font-inter leading-none text-white  xl:text-4xl"
                  : "lg:text-4xl sm-text-3xl text-5xl pt-4 pb-4 w-2/3 font-bold font-inter leading-none text-headerTitle  xl:text-4xl"
              }
            >
              {title}
            </h3>
            <div>
              <p
                className={
                  theme === "dark"
                    ? "lg:text-lg sm:text-lg w-2/3 block font-inter font-medium leading-normal no-underline align-middle  tracking-wide normal-case text-white text-2xl "
                    : "lg:text-lg sm:text-lg w-2/3 block font-inter font-medium leading-normal no-underline align-middle	 tracking-wide normal-case text-slate text-2xl "
                }
              >
                Our goals is to build a comprehensive eco system which allows
                guests to fully enjoy their stay.
              </p>
              <div className="sm:pl-0 flex flex-col pl-20 justify-center item-center mx-auto content-center w-full">
                <div className="flex  pt-10 items-center  ">
                  <div className="mr-6">
                    <img
                      className="lg:h-12 w-42  sm:h-14 w-36 h-14   "
                      src={andro}
                      alt="android and ios store"
                    ></img>
                  </div>
                  <div>
                    <p
                      className={
                        theme === "dark"
                          ? "lg:text-base sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-xl  "
                          : "lg:text-lg sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-xl  "
                      }
                    >
                      Simple, intuitive and lightweight mobile app for Android
                      and iOS operating systems. App for businesses available on
                      iPadOS.
                    </p>
                  </div>
                </div>
                <div className="flex pt-10 items-center  ">
                  <div className="mr-6">
                    <img
                      className="lg:h-12 w-42   sm:h-14  h-14 w-36"
                      src={customize}
                      alt="customeButton"
                    ></img>
                  </div>
                  <div>
                    <p
                      className={
                        theme === "dark"
                          ? "lg:text-base sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-xl  "
                          : "lg:text-lg sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-xl  "
                      }
                    >
                      Fully customizable informations and services you provide.
                      Also customize availability of local businesses’ offers.
                    </p>
                  </div>
                </div>
                <div className="flex pt-10 items-center ">
                  <div className="mr-6">
                    <img
                      className="lg:h-12 w-42  sm:h-14 h-14 w-36"
                      src={pay}
                      alt="pay"
                    ></img>
                  </div>
                  <div>
                    <p
                      className={
                        theme === "dark"
                          ? "lg:text-base sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-xl  "
                          : "lg:text-lg sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-xl  "
                      }
                    >
                      Pay as you go - pay only for completed purchases via
                      credit card payments with cheap monthly plans. Checkout
                      <a
                        className="text-seaBlue xls:text-white"
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        pricing
                      </a>{" "}
                      page for more.
                    </p>
                  </div>
                </div>
                <div className="flex pt-10 items-center">
                  <div className="mr-6">
                    <img
                      className="lg:h-12 w-42  sm:h-14  h-14 w-36"
                      src={graph}
                      alt="graph"
                    ></img>
                  </div>
                  <div>
                    <p
                      className={
                        theme === "dark"
                          ? "lg:text-base sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-xl  "
                          : "lg:text-lg sm:text-base w-2/3 block font-inter font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-xl  "
                      }
                    >
                      Increased interaction rate grows business and increases
                      revenue. Track your business through various metrics and
                      analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MidComponentItem;
