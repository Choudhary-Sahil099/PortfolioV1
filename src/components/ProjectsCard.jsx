import React from 'react'
import Code from '../assets/Code.png'

const ProjectsCard = ({title,des,Img}) => {
  return (
    <div className='bg-white h-110 w-70 rounded-xl flex flex-col p-3 gap-2'>
      <img src={Img} className='w-full h-50 rounded-xl'/>
      <h2 className='text-center text-xl underline bold-2'>{title}</h2>
      <p className='text-[12px] text-gray-600 line-clamp-7'>{des}</p>
      <div className='flex flex-row gap-3 '>
        <button className='bg-[#5419D7] text-white p-2 rounded-xl text-[15px] w-20 hover:bg-[#7e61d3] cursor-pointer'>Live view</button>
        <button className='bg-[#5419D7] text-white p-2 rounded-xl text-[15px] w-10 hover:bg-[#7e61d3] cursor-pointer flex justify-center items-center'><img src={Code}/></button>
      </div>
    </div>
  )
}

export default ProjectsCard
