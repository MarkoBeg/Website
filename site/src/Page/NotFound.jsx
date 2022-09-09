import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import WrapperContainer from "../Components/WrapperContainer/WrapperContainer";

const NotFound = () => {
  return (
    <>
      <NavBar></NavBar>
      <WrapperContainer className="container mx-auto px-4">
        <div className="lg:grid-cols-1 sm:grid-cols-1  grid grid-cols-1 justify-center items-center content-center  py-64">
          <div className="lg:pl-0 md:pl-0 sm:pl-0 mx-auto pl-20">
            <h5
              className="lg:text 4xl sm:text-4xl text-5xl pb-4 font-medium font-inter no-underline 
          align-middle tracking-wide normal-case leading-none text-headerTitle"
            >
              Page not found!
            </h5>
            <h5
              className="lg:text 4xl sm:text-4xl text-3xl pb-4 font-base font-inter no-underline 
          align-middle tracking-wide normal-case leading-none text-headerTitle"
            >
              Sorry, but the page you were looking for could not be found.
            </h5>
            <h6
              className="lg:text 3xl sm:text-3xl text-3xl pb-4 font-base font-inter no-underline 
          align-middle tracking-wide normal-case leading-none text-headerTitle"
            >
              You can return to our{" "}
              <a
                href="/"
                className="md:text-base sm:text-lg font-inter font-base leading-normal no-underline 
            align-middle	tracking-wide normal-case text-seaBlue text-2xl "
              >
                front page
              </a>
            </h6>
          </div>
        </div>
      </WrapperContainer>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
