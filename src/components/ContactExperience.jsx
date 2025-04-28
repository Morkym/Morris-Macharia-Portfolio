import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{ useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ContactExperience = () => {

    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const imageRef = useRef(null)
    useGSAP(() => {
      
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: line1Ref.current,
          start: 'top 80%',},

      })
      gsap.fromTo(
        imageRef.current,
        {opacity:0,x:100},
        {
          opacity:1,
          x:0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            
          },
        }
      )

      timeline.fromTo(
        line1Ref.current,
        {  width: '0%'},
        {
        
          width: '100%',
          ease: 'power2.inOut',
          duration: 1,
          
        },
        
      ).fromTo(
        line2Ref.current,
        {  width: '0%'},
        {
          width: '100%',
          ease: 'power2.inOut',
          duration: 1,
          
        },
        '+=1.5'
      )
    }, [])
  return (
    <div >
      <img ref={imageRef}
      src="/images/profile.png" alt="myPic" className='h-full rounded-b-4xl '/>
      <div className='typing-animation mt-1 items-center flex justify-center text-white-500 font-extralight pt-2 bg-transparent overflow-hidden'>
        <p
        ref={line1Ref}
        className="overflow-hidden whitespace-nowrap w-0">
        I'll probably look like this 
        on our first day. <br />
        
        </p>
        <p
        ref={line2Ref}
        className="overflow-hidden whitespace-nowrap w-0">
          Feel free
        </p>
      </div>
    </div>
  )
}

export default ContactExperience