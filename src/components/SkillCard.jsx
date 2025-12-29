import React from 'react'

const SkillCard = ({Img,title,des}) => {
  return (
    <div className='bg-white px-4 h-130 w-90 rounded-3xl flex flex-col justify-center items-center gap-5'>
      <img src={Img} alt="#image" className='h-55 w-full object-cover rounded-xl'/>
      <div className='bg-[#5419D7] w-40 h-8 flex justify-center items-center text-white rounded-xl'>{title}</div>
      <p className='line-clamp-6'>{des}</p>
      <button className='bg-[#8d63e8] text-white w-35 h-10 rounded-xl '>Technologies</button>
    </div>
  )
}

export default SkillCard
