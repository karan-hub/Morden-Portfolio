import { useState } from 'react'
import { sections } from "./data/portfolioData"
import './App.css'
import Navbar from './components/Navbar'
import logo from './assets/code.png'
import arrow from './assets/right-arrow.png'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import { information, about, skills, experience, education, projects, achievements, certifications, socialLinks } from './data/portfolioData'
 


import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Footer from './components/footer'


function App() {
  return (
    <>
      <div   style={{ cursor: "url('https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/css-examples/cursors/drop.cur'), pointer" }} >
        <div className="bg-[#F1F1F1] ">
          <Navbar logo={logo} items={sections} arrow={arrow} />
          <Hero information={information} />
        </div>

        <div id="about" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <About about={about} />
        </div>

        <div id="skills" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Skills skills={skills} />
        </div>

        <div id="education" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Education education={education} />
        </div>

        <div id="experience" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Experience experience={experience} />
        </div>

        <div id="projects" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Projects projects={projects} />
        </div>

        <div id="achievements" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Achievements achievements={achievements} />
        </div>

        <div id="certifications" className="bg-[#FFFFFF] sm:px-10 px-8 ">
          <Certifications certifications={certifications} />
        </div>

        <Footer socials={socialLinks} />
      </div>
    </>
  )
}


export default App
