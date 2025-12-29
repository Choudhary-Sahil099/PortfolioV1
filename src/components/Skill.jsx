import React from 'react'
import SkillCard from './SkillCard'
import Web from "../assets/web.png"
import Ai from "../assets/Ai.png"
import Problem from "../assets/problemSolving.png"

const Skill = () => {
  return (
    <div className='flex flex-col px-20 min-h-screen w-full bg-[#F9E6FF] gap-10'>
      <div className='flex flex-col pt-10 gap-2'>
        <h3 className='text-2xl text-[#27083F]'>Skills i have</h3>
        <h1 className='text-5xl'><span className='text-4xl text-[#5419D7]'>Tools and Technologies</span><br/> I work with</h1>
      </div>
      <div className='flex gap-20 px-10'>
        <SkillCard 
        Img={Web}
        title="Web-Devlopment"
        des="I have strong experience in modern web development, building scalable and user-focused applications using current technologies. I enjoy transforming ideas into clean, maintainable products and aim to contribute to open-source projects that prioritize performance, accessibility, and real-world impact."
        />
        <SkillCard 
        Img={Ai}
        title="Machine Learning"
        des="I am deeply interested in Machine Learning and motivated to explore how data-driven models can solve real-world problems. I am actively building my foundations and look forward to contributing to impactful, research-oriented projects through continuous learning and experimentation."
        />
        <SkillCard 
        Img={Problem}
        title="Problem solving"
        des="I consistently practice problem solving to strengthen my algorithmic thinking and write efficient, optimized solutions. I approach challenges methodically and enjoy tackling complex problems—skills I aim to apply while contributing meaningfully to GSoC projects."
        />
        
      </div>
    </div>
  )
}

export default Skill
