import React from "react";

const TopMidButton = ({ buttons, filter, selected }) => {
  return (
    <div>
      <div className="md:pb-14 sm:pb-10 flex items-center justify-left pt-8">
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              onClick={() => filter(button.id)}
              className={
                selected === button.id ? "pushable mr-4  " : "pushable mr-4 "
              }
            >
              <span className={selected === button.id ? "front2" : "front "}>
                <img src={button.img} alt={button.name}></img>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopMidButton;
