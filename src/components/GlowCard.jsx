import React from 'react'
import { div } from 'three/tsl'

const GlowCard = ({card,children}) => {
  return (
        <div className='card card-border timeline-card rounded-xl p-10 border-2'>
            <div className='glow'/>
            <div className='flex  items-center gap-1 mb-5'>
                {Array.from({length: 5},(_,index) => (
                    <img src="/images/star.png"  key={index} alt="star" className='size-5'/>    
                ))}
            </div>
            <div className='flex items-center gap-5 mb-5'>
                <div className='font-semibold text-2xl text-white'>
                    {card.company}
                </div>
            </div>
            <div className='  mb-5'>
                    <p className='text-white-50 text-lg'>{card.description}</p>

            </div>
        </div>
            
        
        
)
}

export default GlowCard