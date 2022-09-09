import React, { useRef, useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import WrapperContainer from "../Components/WrapperContainer/WrapperContainer";
import TopMidSection from "../Components/MidSection/TopMidSection";
import ParentMid from "../Components/MidSection/ParentMid";
import TabComponent from "../Components/MidSection/TabComponent";
import DownloadSection from "../Components/MidSection/DownloadSection";
import CardItem from "../Components/MidSection/CardItem";
import Newsletter from "../Components/MidSection/Newsletter";
import Footer from "../Components/Footer/Footer";
import arrow from "../assets/images/arrow.svg";
import { useTheme } from "../ThemeContext/ThemeContextApp";
import { Switch } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";

const Home = () => {
  const sectionTop = useRef(null);

  const handleScrollTop = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { theme } = useTheme();
  const storage = JSON.parse(localStorage.getItem("theme"));
  const [toggleTheme, setTheme] = useState(storage);

  console.log("123", storage);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggleTheme));
  }, [toggleTheme]);

  const handleTheme = () => {
    if (storage) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    } else {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
  };

  return (
    <div>
      <div>
        <Navbar theme={toggleTheme} />
      </div>
      <div
        className={
          toggleTheme === "dark"
            ? "bg-header-dark"
            : "bg-header-img bg-cover w-full bg-no-repeat bg-center h-screen sm:h-full "
        }
      >
        <WrapperContainer>
          <div className="sm:left-20  absolute left-16 mt-24 md:mt-16 sm:mt-16 ">
            <Switch
              label={
                toggleTheme === "light" ? "Switch to Dark" : "Switch to Light"
              }
              defaultChecked={toggleTheme === "dark" ? true : false}
              onClick={handleTheme}
            />
          </div>
          <Header topRef={sectionTop} theme={toggleTheme} />
        </WrapperContainer>
      </div>
      <div className=" bg-gray-100 w-full h-full pt-20  ">
        <WrapperContainer>
          <div
            className={
              toggleTheme === "dark"
                ? "bg-mid-dark h-full bg-cover rounded-xl transform drop-shadow-2xl"
                : "bg-mid-img h-full bg-cover rounded-xl transform drop-shadow-2xl"
            }
          >
            <div className="py-20  ">
              <TopMidSection theme={toggleTheme}></TopMidSection>
            </div>
            <div className="py-20 ">
              <ParentMid parentTheme={toggleTheme}></ParentMid>
            </div>
            <div className="py-10 ">
              <TabComponent theme={toggleTheme}></TabComponent>
            </div>
            <div className="py-10">
              <DownloadSection theme={toggleTheme}></DownloadSection>
            </div>
            <div className="py-10">
              <CardItem theme={toggleTheme}></CardItem>
            </div>
            <div className="py-10 relative">
              <Tooltip content="Back to Top">
                <div
                  onClick={handleScrollTop}
                  className="absolute right-12 mt-24 rounded-full flex justify-center bg-white items-center"
                >
                  <img
                    className="smd:block cursor-pointer hidden"
                    src={arrow}
                    alt="arrowTop"
                  ></img>
                </div>
              </Tooltip>
              <Newsletter></Newsletter>
            </div>
          </div>
        </WrapperContainer>
        <WrapperContainer>
          <Footer></Footer>
        </WrapperContainer>
      </div>
    </div>
  );
};
export default Home;
