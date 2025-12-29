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
    <Skill />
    <Projects />
    <Contact />
    </>
  )
}

export default App
