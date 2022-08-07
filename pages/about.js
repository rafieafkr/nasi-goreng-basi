import React from "react";
import Navbar from "./components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className=" px-7 py-5 pb-11 mb-5">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <p>
            I have no idea what to say so the entire website will do the job
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
