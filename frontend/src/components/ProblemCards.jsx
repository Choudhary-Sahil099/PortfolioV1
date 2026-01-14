import React from 'react'
import ProgressBar from './ProgressBar'
const ProblemCards = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-4 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>My Journey</h1>
        <p className='text-[18px]'>I genuinely enjoy problem solving and consistently challenge myself by tackling algorithmic problems on platforms like LeetCode and Codeforces. I focus on building strong fundamentals in data structures and algorithms, writing efficient solutions, and learning from edge cases and optimizations. This habit has strengthened my logical thinking and helps me approach complex real-world problems in a structured and analytical way.</p>
        
      </div>
      <div className='bg-white w-120 h-80 p-5 flex flex-col gap-3 rounded-xl'>
        <h1 className='text-3xl text-[#420D72]'>Connect With Me</h1>
        <div className='flex flex-col gap-1'>
            <spam className='text-xl'>{'LeetCode'}</spam>
            <button className='skill-btn'>LeetCode</button>
        </div>
        <div className='flex flex-col gap-1'>
            <spam className='text-xl'>{'CodeForces'}</spam>
            <button className='skill-btn'>LeetCode</button>
            
        </div>
        <div className='flex flex-col gap-1'>
            <spam className='text-xl'>{'Discord'}</spam>
            <button className='skill-btn'>LeetCode</button>
            
        </div>
        
      </div>
    </div>
  )
}

export default ProblemCards
