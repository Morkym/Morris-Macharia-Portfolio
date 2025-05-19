import React from 'react'
import TitleHeader from '../TitleHeader'
import { ExpCards } from '../constants'
import GlowCard from '../GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

    useGSAP(() => {
  // Responsive breakpoints using gsap.matchMedia
  const mm = gsap.matchMedia();

  mm.add({
    // For screens wider than 768px (desktop/tablet)
    "(min-width: 769px)": () => {
      gsap.utils.toArray('.timeline-card').forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        });
      });

      gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
          xPercent: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 60%',
          },
        });
      });
    },

    
    "(max-width: 768px)": () => {
    },
  });

  //  Clean up matchMedia on unmount
  return () => mm.revert();
}, []);
  return (
    <section id="experience" className="w-full md:mt-20 mt-20 section-padding ">
        
        <div className='w-full h-full md:px-20 px-2.5'>
        
           
            </div>
        <TitleHeader title='My Work Experience 💼'/>

        <div className='mt-20 relative'>
            <div className='relatve z-50 xl:space-y-32 space-y-10'>
                {ExpCards.map((card) => (
                    <div key={card.title} className='exp-card-wrapper'>
                        <div className='xl:w-2/6  '>
                            <GlowCard card={card}>
                                <div>
                                    <img src={card.imgPath} alt={card.title} />
                                </div>
                            </GlowCard>
                        </div>

                        <div className='xl:w-4/6 '>
                            <div className=' flex flex-row items-start  '>
                                <div className='pt-20 mr-5 relative'>
                                    
                                    <div className='timeline-logo'>
                                        <img src={card.imgPath} alt="logo" />

                                    </div>
                                    


                                </div>
                                
                                <div className='expText flex xl:gap-5 mt-20 md:gap-10 gap-5 relative z-20 '>
                                    
                                    <div>
                                        <h1 className='font-semibold text-2xl text-white'>{card.title}</h1>
                                        
                                        <p className='my-5 text-white-50'>
                                            {card.date}
                                        </p>
                                        <p className='text-white-italic'>
                                            Responsibilities
                                        </p>
                                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                            {card.Comments.map((comment, ) => (
                                                <li key={comment} className='text-lg'>
                                                    <p>{comment}</p>
                                                </li>
                                            ))}
                                            

                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                )
            
            )}

            </div>

        </div>

    </section>
  )
}

export default Experience
