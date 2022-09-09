import React from "react";
import mobileHeader from "../../assets/images/phone.png";
import logo from "../../assets/images/simplify_logo.svg";

const Header = ({ topRef, theme }) => {
  return (
    <div>
      <div
        ref={topRef}
        className="lg:items-baseline sm:grid-cols-1  grid grid-cols-2 justify-center items-center content-center  "
      >
        <div className="lg:pb-0 sm:pl-0 pt-24 md:pl-4  w-4/5 mx-auto pl-20  pb-20   ">
          <img src={logo} className="sm:block h-12 hidden" alt="logo"></img>
          <h1
            className={
              theme === "dark"
                ? "lg:text-5xl sm:text-4xl text-7xl  pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                : "lg:text-5xl sm:text-4xl text-7xl  pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle"
            }
          >
            Mobile app <span className="text-seaBlue">simplifying</span> hotel
            services
          </h1>
          <div>
            <p
              className={
                theme === "dark"
                  ? "md:text-base sm:text-lg font-inter font-medium leading-normal no-underline align-middle	tracking-wide normal-case text-white text-xl   "
                  : "md:text-base sm:text-lg font-inter font-medium leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-xl   "
              }
            >
              We make hotel stays simple for all types of guests by <br></br>{" "}
              making it easier for the hotels themselves at the same time.
              <br></br> By connecting numerous systems, we bring complete
              <br></br>
              access to services in one place.
            </p>
          </div>
          <button className="pushable mt-4 ">
            <span className="front">Start now</span>
          </button>
        </div>
        <div>
          <div>
            <img
              className="lg:h-[700px] md:h-[675px] sm:h-[650px]  header img bg-cover w-full bg-no-repeat bg-center h-[1000px] relative z-30  "
              src={mobileHeader}
              alt="phone"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
