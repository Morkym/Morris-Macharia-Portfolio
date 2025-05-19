import React, { useEffect } from 'react'
import{words} from '../constants/index.js'
import Button from '../Button.jsx'
import HeroExperience from '../HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




const Hero = () => {

    useGSAP(() => {
            gsap.fromTo('.hero-text h1',
                {
                opacity:0,
                y:50,
            },
            {
                opacity:1,
                y:0,
                duration:1,
                stagger:0.5,
                ease:'power3.inOut',
            },
        )
    },)



  return (
    <section id='Hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
            

        </div>
        <div className='hero-layout '>
            {/*LEFT SIDE:Hero text*/}
            <header className=' flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ' >
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Crafting
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md: gap-3 gap-1 pb-2  text-yellow-300 ' >
                                            <img 
                                            src={word.imgPath} 
                                            alt={word.text}
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-red-400 shadow-md'
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Into Actionable</h1>
                        <h1>Purposeful Creations</h1>
                    </div>
                    <p  className='text-white-50 md:text-xl relative z-10 pointer-events-none justify-center '>
                        Morris Macharia here, 
                        <br /><span className='glow-purple '>A passionate software developer with a knack for building scalable and innovative digital solutions.
                            <br /> My curiosity and commitment to continuous learning  turns complex problems into clean,effective and efficient code.</span>
                    </p>
                    <Button  className= "md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text= "Fly into my work"/>
            

                </div>
            </header>

            {/*RIGHT SIDE: 3d model*/}
            <figure>
                <div className='hero-3d-layout transform hover:rotate-y-180 transition-transform duration-500'>
                    <HeroExperience/>
                    
                </div>
                
            </figure>

        </div>


    </section>
  )
}

export default Hero