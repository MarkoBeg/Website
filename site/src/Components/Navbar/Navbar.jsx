import React, { useEffect } from "react";
import SiteNav, { ContentGroup } from "react-site-nav"; // 1. Do this
import { navbarDataFeatures } from "../../dummyData/dummyData";
import { navbarDataCompany } from "../../dummyData/dummyData";
import { navbarDataContacts } from "../../dummyData/dummyData";
import { navbarDataPricing } from "../../dummyData/dummyData";
import { mobileNavFeatures } from "../../dummyData/dummyData";
import { mobileNavPriceing } from "../../dummyData/dummyData";
import { mobileNavContact } from "../../dummyData/dummyData";
import NavMobile from "./NavMobile";
import MobileDropText from "./MobileDropText";
import NavBarChild from "./NavBarChild";
import { useTheme } from "../../ThemeContext/ThemeContextApp";
import logo from "../../assets/images/simplify_logo.svg";

const Navbar = ({ theme }) => {
  const { scroll } = useTheme();

  const [startScroll, setStartScroll] = scroll;

  const handleScroll = () => {
    if (window.scrollY > 55) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startScroll]);

  return (
    <>
      <header>
        <div
          className={
            startScroll
              ? "sm:hidden fixed justify-center items-center bg-headerMirror w-full backdrop-blur z-40 	h-11 mr-4  "
              : "sm:hidden fixed justify-center  items-center bg-transparent w-full transition-all z-40 h-11  "
          }
        >
          <img
            src={logo}
            className="lg:left-[240px] block h-10 left-[240px] sm:hidden md:hidden fixed top-1"
            alt="logo"
          ></img>
          <SiteNav
            style={{ fontWeight: "900" }}
            background={
              startScroll
                ? "sm:hidden fixed justify-center items-center bg-headerMirror w-full backdrop-blur z-10	h-11 "
                : "sm:hidden fixed justify-center  items-center bg-transparent w-full transition-all h-11  "
            }
            align="center" /* center, left, right. This directly maps to justify-content of the root grid. */
            columnWidth="200"
            rowHeight="45"
            color={theme === "dark" ? "git pwhite" : "text-slate"}
            fontSize="18"
            fontFamily="Inter"
            fontWeight="900"
            contentBackground="#fff" /* Applies to all content groups */
            contentColor={
              theme === "dark" ? "#fff" : "text-slate"
            } /* Applies to all content groups */
            contentTop="0" /* Adjusts the distance between ContentGroups and root items */
            breakpoint="960" /* Show site nav at this breakpoint */
            debug={false} /* Keep ContentGroups open to make debugging easier */
          >
            <ContentGroup
              title="Features"
              width="400"
              height="455"
              style={{
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "4px 4px 2px 3px rgba(0,0,0,0.6)",
              }}
            >
              {navbarDataFeatures.map((item) => {
                return (
                  <NavBarChild
                    key={item.id}
                    link={item.link}
                    title={item.title}
                    text={item.text}
                    iconInfo={item.iconInfo}
                    img={item.img}
                  ></NavBarChild>
                );
              })}
            </ContentGroup>
            <ContentGroup
              title="Company"
              width="400"
              height="455"
              style={{
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "4px 4px 2px 3px rgba(0,0,0,0.6)",
              }}
            >
              {navbarDataCompany.map((item) => {
                return (
                  <NavBarChild
                    key={item.id}
                    link={item.link}
                    title={item.title}
                    text={item.text}
                    iconInfo={item.iconInfo}
                    img={item.img}
                  ></NavBarChild>
                );
              })}
            </ContentGroup>
            <ContentGroup
              title="Contacts"
              width="400"
              height="455"
              style={{
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "4px 4px 2px 3px rgba(0,0,0,0.6)",
              }}
            >
              {navbarDataContacts.map((item) => {
                return (
                  <NavBarChild
                    key={item.id}
                    link={item.link}
                    title={item.title}
                    text={item.text}
                    iconInfo={item.iconInfo}
                    img={item.img}
                  ></NavBarChild>
                );
              })}
            </ContentGroup>
            <ContentGroup
              title="Pricing"
              width="400"
              height="455"
              style={{
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "4px 4px 2px 3px rgba(0,0,0,0.6)",
              }}
            >
              {navbarDataPricing.map((item) => {
                return (
                  <NavBarChild
                    key={item.id}
                    link={item.link}
                    title={item.title}
                    text={item.text}
                    iconInfo={item.iconInfo}
                    img={item.img}
                  ></NavBarChild>
                );
              })}
            </ContentGroup>
          </SiteNav>
        </div>
        <NavMobile>
          <div className="grid grid-cols-3">
            <div>
              {mobileNavFeatures.map((item) => {
                return (
                  <MobileDropText
                    key={item.id}
                    uniqueTitle={item.uniqueTitle}
                    title={item.title}
                    text={item.text}
                    iconInfo={item.iconInfo}
                    img={item.img}
                    link={item.link}
                  ></MobileDropText>
                );
              })}
            </div>
            <div>
              {mobileNavPriceing.map((item) => {
                return (
                  <MobileDropText
                    key={item.id}
                    uniqueTitle={item.uniqueTitle}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    link={item.link}
                    iconInfo={item.iconInfo}
                  ></MobileDropText>
                );
              })}
            </div>
            <div>
              {mobileNavContact.map((item) => {
                return (
                  <MobileDropText
                    key={item.id}
                    uniqueTitle={item.uniqueTitle}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    link={item.link}
                    iconInfo={item.iconInfo}
                  ></MobileDropText>
                );
              })}
            </div>
          </div>
        </NavMobile>
      </header>
    </>
  );
};

export default Navbar;
