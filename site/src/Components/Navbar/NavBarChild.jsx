import React from "react";
import { Link } from "react-router-dom";

const NavBarChild = ({ title, img, imgIcon, link, text }) => {
  return (
    <div className="block pt-2 ">
      <Link to={"/" + link}>
        <div>
          <div className="flex justify-between items-center ml-2 ">
            <div className="mr-4">
              <img className="h-6" src={img} alt={imgIcon} />
            </div>
            <div className="flex-start flex-col items-center w-full py-2 ">
              <h6 className="text-sm font-semibold font-inter no-underline align-middle tracking-wide normal-case leading-none text-headerTitle">
                {title}
              </h6>
              <p className="font-inter font-extralight leading-normal no-underline align-middle	tracking-wide normal-case text-slate text-sm">
                {text}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavBarChild;
