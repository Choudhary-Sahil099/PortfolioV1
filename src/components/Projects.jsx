import React from 'react'
import ProjectsCard from './ProjectsCard'
import P1 from '../assets/CodeBox.png'
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Projects = () => {
  return (
    <div className='bg-[#F9E6FF] min-h-screen px-20 flex flex-col gap-7'>
        <div className='flex flex-col pt-10'>
            <p className='text-xl text-[#27083F]'>Idea's and Project's</p>
            <p className='text-5xl'><span className='text-4xl text-[#5419D7]'>Some thing's</span><br/>I've worked on</p>
        </div>
       <div className='overflow-hidden scroll-smooth'>
         <div className='flex gap-5'>
            <ProjectsCard
            Img={P1}
            title="Code-Box"
            des="Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles." />
             <ProjectsCard
            Img={P1}
            title="Code-Box"
            des="Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles." />
             <ProjectsCard
            Img={P1}
            title="Code-Box"
            des="Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles." />
             <ProjectsCard
            Img={P1}
            title="Code-Box"
            des="Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles." />
             <ProjectsCard
            Img={P1}
            title="Code-Box"
            des="Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles." />
        </div>
       </div>
        <div className='flex justify-center items-center gap-5'>
            <button className='flex justify-center items-center bg-[#420D72] rounded-full h-14 w-14 hover:bg-[#6a3d95] cursor-pointer'><FaAngleLeft className='text-white h-8 w-8'/></button>
            <button className='flex justify-center items-center bg-[#420D72] rounded-full h-14 w-14 hover:bg-[#6a3d95] cursor-pointer'><FaAngleRight className='text-white h-8 w-8'/></button>

        </div>
    </div>
  )
}

export default Projects
