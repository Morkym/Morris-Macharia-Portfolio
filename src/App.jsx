
import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import './index.css'
import Hero from './components/sections/Hero'
import ShowCase from './components/sections/ShowCase'
import NavBar from './components/NavBar'
import SkillsCard from './components/SkillsCard'
import Experience from './components/sections/Experience'
import Tech from './components/sections/Tech'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
 
const [isLoaded,setIsLoaded] =useState(false)
  return (
    <>
    {/*!isLoaded &&<LoadingScreen  onComplete={() => setIsLoaded(true)} />*/}
      <NavBar />  
      <Hero />
      <ShowCase />
      <SkillsCard/>
      <Experience />
      <Tech/>
      <Contact/>
      <Footer />
      
    </>
  )
}

export default App
