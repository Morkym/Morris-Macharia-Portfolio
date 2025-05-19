import React from 'react'
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectLinks } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {

    const sectionRef = React.useRef(null)
    const project1Ref = React.useRef(null)
    const project2Ref = React.useRef(null)
    const project3Ref = React.useRef(null)


useGSAP(() => {

    /*create an  array of refs for the projects then loop through them to animate one by one*/
    const projects = [project1Ref.current, project2Ref.current , project3Ref.current];
   
   



/*animate the section when it comes into view*/
    gsap.fromTo(
        sectionRef.current,
        {opacity:0},
            
        {opacity:1,duration:1.5}  ,
        
        
        )
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {opacity:0, y:50},
                {
                    opacity:1,
                    y:0,
                    duration:1,
                    delay:(index+1) * 0.2,
                    scrollTrigger:{
                        trigger:card,
                        start:'top 80%',
                        end:'top 30%',
                        toggleActions:'play none none reverse',
                        
                    }
                }
            )
        })
},[])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT */}
                <div  ref={project1Ref} className='first-project-wrapper' >
                    <a href="https://vibe-bank.netlify.app/">
                    <div className='image-wrapper opacity-100 hover:opacity-70'>
                        <img src="/images/project01.png" alt="bank" />
                    </div>
                    </a>
                    
                    <div className='text-content'>
                        <h2><span className='font-bold text-teal-300'>Vibes Bank</span>  
                        <br /><span  className='font-light '>A user friendly solution to your bank issues</span></h2>
                    </div>
                </div>
                {/*RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div  ref={project2Ref} className='project'>
                        <a href="https://morrisoh-eats.netlify.app/">
                         <div className='image-wrapper bg-[#ffefdb] opacity-100 hover:opacity-70'>
                            <img src="/images/project02.png" alt="second" className='rounded-3xl' />
                         </div> 
                        </a>
                      
                        <div className='text-content'>
                        <h2>
                            <span className='font-bold text-amber-100'>Morrisoh Eats</span> <br />
                            <span className='font-light '> Delicious meals, refreshing drinks, and a warm atmosphere for every occasion.</span>
                            </h2>
                        </div>
                    </div>
                    <div ref={project3Ref} className='project'>
                        <a href='https://morkym.github.io/Morris-Movies/'>
                         <div className='image-wrapper bg-black'>
                            {/* <img src="/images/project03.png" alt="third" /> */}
                            <img src="/images/project03.png" alt="third" 
                            className='object-cover w-full opacity-100 hover:opacity-70 '
                         />
                        </div>
                        </a>
                       
                        <div className='text-content'>
                        <h2>
                            <span className='font-bold text-[#FF0052]'>Morrisoh Movies</span>
                            <br /><span className='font-light'>Explore, stream, and stay updated on the latest movies.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ShowCase