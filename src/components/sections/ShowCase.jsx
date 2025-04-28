import React from 'react'
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { calcNURBSDerivatives } from 'three/examples/jsm/curves/NURBSUtils.js';


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
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>Beautiful,user freindly solution to movies</h2>
                    </div>
                </div>
                {/*RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div  ref={project2Ref} className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="second" />
                        </div>
                        <div className='text-content'>
                        <h2>Second  platform</h2>
                        </div>
                    </div>
                    <div ref={project3Ref} className='project'>
                        <div className='image-wrapper bg-[#81258b]'>
                            <img src="/images/project3.png" alt="third" />
                        </div>
                        <div className='text-content'>
                        <h2>Third platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ShowCase