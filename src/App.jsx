import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Skill from './components/Skill';
import Projects from './components/Projects';


const App = () => {
  return (
    <>
    <Navbar/>
    <Profile />
    <hr className="border-t border-black-300" />
    <Projects />
    </>
  )
}

export default App
