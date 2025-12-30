import React from 'react'
import Code from '../assets/Code.png'
import { FaCode } from "react-icons/fa";

const ProjectsCard = ({ title, des, Img }) => {
  return (
    <div className="bg-white h-130 w-90 shrink-0 px-4 py-4 rounded-3xl flex flex-col justify-center items-center gap-5">
      
      <img
        src={Img}
        className="w-full h-55 object-cover rounded-xl"
      />

      <div className="bg-[#5419D7] w-40 h-8 flex justify-center items-center rounded-xl text-white ">
        {title}
      </div>

      <p className=" line-clamp-6">
        {des}
      </p>

      <div className="flex gap-3">
        <button className="bg-[#8d63e8] text-white p-2 rounded-xl text-[15px] w-20 hover:bg-[#7e61d3] cursor-pointer">
          Live view
        </button>

        <button className="bg-[#8d63e8] text-white p-2 rounded-xl w-10 
                           hover:bg-[#7e61d3] flex justify-center items-center cursor-pointer">
          <FaCode className='h-5 w-10'/>
        </button>
      </div>
    </div>
  );
};


export default ProjectsCard
