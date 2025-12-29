import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
    <Navbar/>
    <Profile />
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    <Skill />
    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    <Projects />
    <Contact />
    </>
  )
}

export default App
