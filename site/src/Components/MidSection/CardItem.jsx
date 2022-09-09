import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { cardData } from "../../dummyData/dummyData";
import star from "../../assets/images/star.svg";
import starWhite from "../../assets/images/starWhite.svg";
import { motion } from "framer-motion";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";

const CardItem = ({ theme }) => {
  const starList = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="text-center">
        <h2
          className={
            theme === "dark"
              ? "lg:text-4xl sm:text-4xl text-6xl pt-20 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none cursor-pointer text-white "
              : "lg:text-4xl sm:text-4xl text-6xl pt-20 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none cursor-pointer text-headerTitle "
          }
        >
          Request a demo
        </h2>
        <p
          className={
            theme === "dark"
              ? "lg:text-base md:text-base sm:text-lg block font-normal leading-normal no-underline align-middle tracking-wide normal-case text-white text-2xl pt-10 "
              : "lg:text-base md:text-base sm:text-lg block font-normal leading-normal no-underline align-middle tracking-wide normal-case text-slate text-2xl pt-10 "
          }
        >
          Explore all the nice stuff that SimplifyStay is providing and much
          more ...
        </p>
        <div className="sm:w-full w-full flex item-center justify-evenly pt-10 ">
          <div>
            <img
              className="sm:h-10 h-12 cursor-pointer   "
              src={googlePlay}
              alt="googleApp"
            ></img>
          </div>
          <div>
            <img
              className="sm:h-10  h-12 cursor-pointer  "
              src={appleStore}
              alt="applePlay"
            ></img>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className=" md:grid-cols-1 sm:grid-cols-1 mx-auto gap-8 grid grid-cols-3 items-center  content-between w-full pt-32  "
      >
        {cardData.map((item) => {
          return (
            <div
              className="xl:pl-0 lg:pl-0 md:pl-0 sm:pl-0  mx-auto pl-20"
              key={item.id}
            >
              <Card
                className={
                  item.id === "1"
                    ? "  w-80 bg-slate border border-white"
                    : " w-80 bg-white"
                }
              >
                <CardBody className="text-center">
                  <Typography
                    variant="h5"
                    className={
                      item.id === "1"
                        ? "mb-2 font-inter  leading-normal no-underline align-middle	tracking-wide normal-case text-white"
                        : "mb-2 font-inter  leading-normal no-underline align-middle	tracking-wide normal-case text-slate "
                    }
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className={
                      item.id === "1"
                        ? "font-inter font-light leading-normal no-underline align-middle	tracking-wide normal-case h-32 text-white"
                        : "font-inter font-light leading-normal no-underline align-middle	tracking-wide normal-case text-slate h-32"
                    }
                  >
                    {item.text}
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex flex-col items-center content-center justify-center justify-items-center py-3"
                >
                  <Typography
                    variant="small"
                    className="text-center pb-2 font-inter font-light leading-normal no-underline align-middle hover:animate-pulse 	tracking-wide normal-case text-seaBlue cursor-pointer"
                  >
                    See more
                  </Typography>
                  <div className="flex flex-row justify-center">
                    {starList.map((start, index) => {
                      return (
                        <div key={index}>
                          {item.id === "1" ? (
                            <img src={starWhite} alt="star"></img>
                          ) : (
                            <img src={star} alt="star"></img>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CardItem;
