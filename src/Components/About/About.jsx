import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Science
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  A data scientist uses and processes raw data to discover interesting insights that help organizations make more informed decisions. They are part of the entire life cycle of data science projects. This means they work on collecting and storing data, as well as in data processing, developing data models, data analysis, and visualization.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Cyber Security (Cisco)
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A cyber security analyst anticipates cyber attacks to prevent them from harming the IT infrastructure. They protect computer networks, corporate data, and hardware devices from these cyber attacks. Hence, they will evaluate vulnerabilities by performing tests and configuring tools with antiviruses. 
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Electronics and Communication
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am an experienced Electronics Engineer with a years of experience in designing, testing, and debugging complex electronic systems. My expertise lies in developing industrial automation systems and wireless communication networks. I have strong technical skills and a proven track record of successful project delivery. I am a highly motivated team player and have a passion for applying creative problem- solving skills to complex projects.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
