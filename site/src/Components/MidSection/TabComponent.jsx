import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../dummyData/dummyData";
import { motion } from "framer-motion";

const TabComponent = ({ theme }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Tabs
        id="custom-animation"
        value="restaurant"
        className="md:grid-cols-1 sm:grid-cols-1 mx-auto  grid grid-cols-2  justify-items-center items-center content-between w-full "
      >
        <div className=" sm:pl-8  w-4/5 mx-auto pl-20 ">
          <h1
            className={
              theme === "dark"
                ? "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-96 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white "
                : "lg:text-4xl sm:text-3xl text-6xl pt-4 pb-4 w-96 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle "
            }
          >
            Features
          </h1>
          <p
            className={
              theme === "dark"
                ? "lg:text-lg sm:text-lg block  font-inter font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-white text-2xl pb-10 "
                : "lg:text-lg sm:text-lg block  font-inter font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-2xl pb-10 "
            }
          >
            SimplifyStay offers many great features. You can order food, request
            a service, book a spa, buy event ticket, rent a bike and so much
            more. Take a sneak peek at each of them.
          </p>
          <TabsHeader className="flex justify-center items-center content-center bg-gray-100 xl:flex-col w-full ">
            {tabsData.map(({ label, value }) => (
              <Tab className="" key={value} value={value}>
                <p
                  className=" text-seaBlue font-inter font-medium leading-normal no-underline align-middle	
          tracking-wide normal-case xl:text-md w-full"
                >
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <div>
            <TabsBody
              animate={{
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {" "}
              {tabsData.map(({ value, desc, linkText }) => (
                <TabPanel key={value} value={value}>
                  <p
                    className={
                      theme === "dark"
                        ? '"lg:text-base sm:text-base pb-4 block font-inter font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-white text-lg relative right-4 "'
                        : "lg:text-base sm:text-base pb-4 block font-inter font-normal leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-lg relative right-4 "
                    }
                  >
                    {" "}
                    {desc}
                  </p>
                  <span
                    className="lg:text-xs sm:text-xs font-inter font-normal leading-normal text-seaBlue  
                  text-md relative right-4 cursor-pointer hover:animate-pulse  "
                  >
                    {linkText}
                  </span>
                </TabPanel>
              ))}
            </TabsBody>
          </div>
        </div>
        <div>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, img }) => (
              <TabPanel key={value} value={value}>
                <img
                  className="sm:h-[450px] h-[650px]"
                  src={img}
                  alt="phone"
                ></img>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default TabComponent;
