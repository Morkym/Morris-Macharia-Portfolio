import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Bird } from './Bird';
import HeroLights from './HeroLights';

const HeroExperience = () => {
    const isTablet =useMediaQuery({query:'(max-width:1024px)'});
    const isMobile = useMediaQuery({query:'(max-width: 768px )'});
  return (
    < Canvas camera={{position:[0,0,15],fov:45}}>
        
        <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI /5}
        maxPolarAngle={Math.PI /2}

        />
        <HeroLights/>
        <group scale={0.01} position={isMobile ? [0, -3, 0] : [0, -2, 0]}
        position-y={isTablet ? -2 : -2}
        rotation={isMobile ? [0, 0, 0] : [0, -Math.PI / 2, 0]}>
          <Bird/>
        </group>
        
    </Canvas>
  )
}

export default HeroExperience