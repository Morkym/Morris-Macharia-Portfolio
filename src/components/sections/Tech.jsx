import React from 'react'
import TitleHeader from '../TitleHeader'
import { techIcons } from '../constants'

const Tech = () => {
  return (
    <div id='skills' className='flex justify-items-start section-padding  px-0'>
        <div className='w-full h-full px-0 md:px-10  mx-0 '>
            <TitleHeader
            title={'What I Bring To The Table'}
            />
            <div className='tech-grid'>
            {techIcons.map((icon) => (
              
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                    
                    <div className='tech-card-content'>
                      <div className='tech-icon-wrapper'>
                        <img src={icon.imgPath} alt={icon.name} className='tech-icon' />
                      </div>
                      <div className='padding-x w-full'>
                        <p>{icon.name}</p>
                      </div>
                    </div>
                    
                </div>
            ))}

            </div>

        </div>

    </div>
  )
}

export default Tech