import React from 'react'

/* a re usable componentes for titles*/ 
const TitleHeader = ({title}) => {
  
  

  return (
    <div className='flex flex-col items-start gap-5 justify-items-start '>
      <div className='font-semibold text-5xl md:text-5xl text-center text-yellow-300'> 
        <p>{title}</p>
      </div>
      
    
    </div>
  )
}

export default TitleHeader