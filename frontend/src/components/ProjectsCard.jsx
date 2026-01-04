import React from 'react'
import Code from '../assets/Code.png'
import { FaCode } from "react-icons/fa";

const ProjectsCard = ({ title, des, Img }) => {
  return (
    <div className="ProjectCardWrapper">
      
      <img
        src={Img}
        className="ProjectImg"
      />

      <div className="ProjectTitle">
        {title}
      </div>

      <p className="skillp">
        {des}
      </p>

      <div className="flex gap-3">
        <button className="LiveBtn">
          Live view
        </button>

        <button className="Code">
          <FaCode className='h-5 w-10'/>
        </button>
      </div>
    </div>
  );
};


export default ProjectsCard
