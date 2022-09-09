import React from "react";
import { FooterData1 } from "../../dummyData/dummyData";
import { FooterData2 } from "../../dummyData/dummyData";
import { FooterData3 } from "../../dummyData/dummyData";
import logo from "../../assets/images/simplify_logo.svg";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";
import fb from "../../assets/images/fb.svg";
import inst from "../../assets/images/inst.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="lg:pl-0 md:pl-0 sm:grid-cols-2  grid grid-cols-4 gap-0 items-center justify-items-center  ">
        <div className=" lg:pl-0 md:pl-0 sm:pl-0 mx-auto  h-64  ">
          <div>
            <img
              className="sm:h-14 h-14 cursor-pointer"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <div className="mt-5">
            <img
              className="sm:h-8 h-8 cursor-pointer"
              src={appleStore}
              alt="Google Play"
            ></img>
          </div>

          <div className="mt-5">
            <img
              className="sm:h-8 h-8 cursor-pointer"
              src={googlePlay}
              alt="Google Play"
            ></img>
          </div>
        </div>

        <div className="h-64  ">
          <h3 className="sm:text-base cursor-pointer text-lg pb-2 font-semibold text-headerTitle font-inter">
            Features
          </h3>
          {FooterData1.map((item) => {
            return (
              <div>
                <div key={item.id}>
                  <p className="sm:text-sm block cursor-pointer py-1 font-inter font-normal leading-normal text-paragraph text-md hover:opacity-70">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-auto h-64  ">
          <h3 className="sm:text-base cursor-pointer text-lg pb-2 font-semibold text-headerTitle font-inter">
            Resources
          </h3>
          {FooterData2.map((item) => {
            return (
              <div>
                <div key={item.id}>
                  <p className="sm:text-sm block cursor-pointer py-1 font-inter font-normal leading-normal text-paragraph text-md hover:opacity-70 ">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-64">
          <h3 className="sm:text-base  cursor-pointer text-lg pb-2 font-semibold text-headerTitle font-inter">
            Contact
          </h3>
          {FooterData3.map((item) => {
            return (
              <div>
                <div key={item.id}>
                  <p className="sm:text-sm block cursor-pointer py-1 font-inter font-normal leading-normal text-paragraph text-md hover:opacity-70 ">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between">
            <div>
              <span className="cursor-pointer">
                <img src={fb} alt="facebook-link"></img>
              </span>
            </div>
            <div>
              <span className="cursor-pointer">
                <img src={inst} alt="facebook-link"></img>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none " />
      </div>
      <div className="sm: flex justify-around items-center py-6  ">
        <div>
          <p
            className="sm:text-base  cursor-pointer text-lg pb-2 font-medium text-headerTitle
             font-inter  "
          >
            SimplifyStay
          </p>
        </div>
        <div
          className="sm:text-xs cursor-pointer text-md pb-2 font-light
           text-headerTitle font-inter   "
        >
          <p>Copyright © {year} page by Marko</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
