import React, { useState } from "react";
import NavBarMobileContainer from "./NavBarMobileContainer";

const NavMobile = ({ children, notFound }) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(0);

  const handleNav = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 500);
    setAnimate(!animate);
  };

  return (
    <>
      <div>
        <div>
          <div className="hidden absolute top-2 text-base cursor-pointer right-4 smd:block z-40">
            {open ? (
              <span>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#3D3F3E"
                  className={
                    animate === false ? "animate-ping w-8 h-8 " : "w-8 h-8 "
                  }
                  onClick={handleNav}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#3D3F3E"
                className={animate ? "animate-spin w-8 h-8 " : "w-8 h-8   "}
                onClick={handleNav}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {open && <NavBarMobileContainer>{children}</NavBarMobileContainer>}
    </>
  );
};

export default NavMobile;
