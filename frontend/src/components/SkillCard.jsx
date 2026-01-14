import React from 'react'

const SkillCard = ({Img,title,des, onClick, isActive }) => {
  return (
    <div className='skillCardWrapper'>
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
