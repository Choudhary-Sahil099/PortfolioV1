import React from 'react'
import Code from '../assets/Code.png'

const ProjectsCard = ({ title, des, Img }) => {
  return (
    <div className="bg-white h-full w-full rounded-xl flex flex-col p-3 gap-2 
                    border border-transparent hover:border-violet-500 transition">
      
      <img
        src={Img}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h2 className="text-center text-xl underline font-semibold">
        {title}
      </h2>

      <p className="text-[12px] text-gray-600 line-clamp-7">
        {des}
      </p>

      <div className="flex gap-3">
        <button className="bg-[#5419D7] text-white p-2 rounded-xl text-[15px] w-20 hover:bg-[#7e61d3]">
          Live view
        </button>

        <button className="bg-[#5419D7] text-white p-2 rounded-xl w-10 
                           hover:bg-[#7e61d3] flex justify-center items-center">
          <img src={Code} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};


export default ProjectsCard
