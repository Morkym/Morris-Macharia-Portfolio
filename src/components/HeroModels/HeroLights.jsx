import React from 'react'

const HeroLights = () => {
  return (
    <>
        <ambientLight intensity={0.5} color="#1a1a40"/>
        <directionalLight position={[-5,5,4]} intensity={2}/>
        <pointLight position={[0,0,-5]} intensity={4}/>
        <hemisphereLight color="#1a1a40" groundColor="#ffffff" intensity={2} />
    </>
  )
}

export default HeroLights