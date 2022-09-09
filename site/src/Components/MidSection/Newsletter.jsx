import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center content-center justify-items-center ">
      <div className="md:flex-col sm:flex-col h-full flex justify-evenly bg-slate w-4/5 py-16 rounded-xl translate-y-44  ">
        <div>
          <h2
            className="sm:text-2xl w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline 
          align-middle tracking-wide normal-case leading-none text-white pl-8 "
          >
            Sign up for our newsletter
          </h2>
          <p
            className="sm:text-base block  font-inter font-light leading-normal no-underline 
          align-middle tracking-wide normal-case text-white text-lg  pl-8 "
          >
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div className="md:flex-col sm:flex-col  flex items-center justify-items-center content-center">
          <div className="sm:w-4/5 pb-4 pt-4  w-64 ">
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Enter your email"
            ></Input>
          </div>
          <div>
            <Button
              onClick={handleSubmit}
              ripple={true}
              className="ml-2 xl:mr-4"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
