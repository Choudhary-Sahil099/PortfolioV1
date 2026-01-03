import React from 'react'

const SkillCard = ({Img,title,des}) => {
  return (
    <div className='skillCardWrapper'>
      <img src={Img} alt="#image" className='skillImg'/>
      <div className='skillTitle'>{title}</div>
      <p className='skillp'>{des}</p>
      <button className='skill-btn'>Technologies</button>
    </div>
  )
}

export default SkillCard
