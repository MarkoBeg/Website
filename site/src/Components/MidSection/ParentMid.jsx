import React from "react";
import MenuComponentItem from "./MidComponentItem";
import MidComponentPhone from "../../assets/images/MidComponentPhone.png";
import mobileImage1 from "../../assets/images/midPhoneBlack.png";

const ParentMid = ({ parentTheme }) => {
  return (
    <div>
      <div>
        <div>
          <MenuComponentItem
            title="Dive into the future"
            img={MidComponentPhone}
            theme={parentTheme}
            text="In a world where people constantly have phones in their hands, the need for online opportunities is growing. We have a solution - fully digital access to all information and services related to the place of residence and the accommodation itself. Everything for a carefree stay full of services and hobbies in the palm of a hand."
            reverse
          ></MenuComponentItem>
          <div>
            <MenuComponentItem
              title="Why SimplifyStay"
              theme={parentTheme}
              img={mobileImage1}
            ></MenuComponentItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentMid;
