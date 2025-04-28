import React, { useRef } from 'react'
import { skills } from './constants'
import TitleHeader from './TitleHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)



const SkillsCard = () => {

    
useGSAP(() => {
   gsap.utils.toArray('.card-border').forEach((card) => {
    gsap.fromTo(
        card,
        {opacity:0, y:50},
        {
            opacity:1,
            y:0,
            duration:1,
            scrollTrigger:{
                trigger:card,
                start:'top 80%',
                end:'top 30%',
                toggleActions:'play none none reverse',
                markers:false,
            }
        }
    )
   })
},[])


  return (
    <div className='w-full paddinx-g-lg '>
        <TitleHeader
        title='Soft Skills 👋🏽'/>
        <div className='mx-auto grid-3-cols pt-20  '  >
            
                { skills.map(({name,icon,description,bgImage}) => (
                    <div className=' relative  group card-border' key={name}>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-lime-700 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-100  "></div>
                        <div  className=' relative card-border rounded-xl p-8 flex flex-col gap-y-2' >
                            <div className='absolute  inset-0 group-hover:scale-50 duration-100 rounded-lg overflow-hidden'>
                                <img src={bgImage} alt={name} className='object-cover h-full w-full  object-center filter opacity-65'/>
                                {/* Vignette Overlay */}
                                    <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 100%)'
                                    }}
                                    />
                                
                            </div>
  

                            <div className='opacity-50 group-hover:opacity-100 transition duration-100'>
                            {icon}
                            </div>
                            <h3 className='text-white-500  text-2xl font-semibold mt-2 opacity-100 group-hover:opacity-100 transition duration-100 translate-y-3'>
                                {name}
                            </h3>
                            <p className='text-cyan-100 text-lg opacity-50 group-hover:opacity-100 transition duration-100 translate-y-3'>
                                {description}
                            </p>

                        </div>
                </div>
                
                ))}
            

        </div>

    </div>
  )
}

export default SkillsCard