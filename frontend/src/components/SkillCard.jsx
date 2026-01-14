import React from 'react'

const SkillCard = ({Img,title,des, onClick, isActive }) => {
  return (
    <div className='skillCardWrapper transition-all duration-300 ease-out
    hover:scale-[1.02]
    hover:shadow-xl'>
      <img src={Img} alt="#image" className='skillImg'/>
      <div className='skillTitle'>{title}</div>
      <p className='skillp'>{des}</p>
      <button onClick={onClick} className='skill-btn'>
        {isActive ? "Go Back" : "View More"}
      </button>
    </div>
  )
}

export default SkillCard
