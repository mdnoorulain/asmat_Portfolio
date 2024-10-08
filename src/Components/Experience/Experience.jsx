import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { MdDirectionsRailwayFilled  } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import { FaHouseSignal } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa6";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <div><MdDirectionsRailwayFilled  color="#4285F4" size={50} /></div>
            <div><span className="text-white">
              <h2 className="leading-tight">Indian Railway</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Intern</li>
                <li>- 
                Completed an internship with Indian Railways, gaining hands-on experience in operations and maintenance, enhancing project management skills, and contributing to team efforts to improve efficiency and safety standards.</li>
              </ul>
            </span> </div>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <div><FaHouseSignal color="#E50914" size={50} /> </div>
            <div> <span className="text-white">
              <h2 className="leading-tight">Signal and Telecommunication</h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Intern.</li>
                <li>- Interned in Signal and Telecommunication, focusing on system design and maintenance. Gained practical experience in project execution, troubleshooting, and enhancing communication networks, contributing to improved operational efficiency and safety</li>
              </ul>
            </span> </div>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          <div> <FaSalesforce color="#FF9900" size={50} /></div>
           <div> <span className="text-white">
              <h2 className="leading-tight">Seleforce Virtual</h2>
              <p className="text-sm leading-tight font-thin">
                jan 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Intern.</li>
                <li>- Completed a virtual internship with Salesforce, developing skills in cloud technology and customer relationship management. Engaged in real-world projects, enhancing data analysis, teamwork, and problem-solving abilities in a collaborative environment.</li>
              </ul>
            </span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
