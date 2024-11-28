
/*
This work is based on "Robot RoCKet" (https://sketchfab.com/3d-models/robot-rocket-f04d70f5a38943098da45f76e7ebb238)
 by TeKen_art30 (https://sketchfab.com/ken_art30) 
 licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)


 This work is based on "Satellite Dishes Animation Fun"
  (https://sketchfab.com/3d-models/satellite-dishes-animation-fun-72393f67ee5b4e17bc64cd18b443dd4d)
   by 3DHaupt (https://sketchfab.com/dennish2010)
    licensed under CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
*/

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from "../components/HackerRoom.jsx";
import { Suspense } from 'react';
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Robot from "../components/Robot.jsx";
import Satelite from "../components/Satelite.jsx";

const Hero = () => {


    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center">
                Hi, I am Nour-Allah <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Proactive Tech Innovator</p>
        </div>
        
        <div className="w-full h-full absolute inset-0">
            {/* <Leva /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>

                <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                <HeroCamera isMobile={isMobile}>
                    <HackerRoom
                        //scale={0.07}
                        //position={[0, 0, 0]} 
                        //rotation={[0, 280, 0]}
                        position={sizes.deskPosition} 
                        rotation={[0, -Math.PI, 0]}
                        scale={sizes.deskScale}
                    />
                </HeroCamera>
                
                <group>
                    <Satelite position={sizes.targetPosition}/>
                    <ReactLogo position={sizes.reactLogoPosition}/>
                    <Robot position={sizes.cubePosition}/>
                    <Rings position={sizes.ringPosition}/>
                </group>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                
                </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
                <Button name="Let's Work Together!" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
        </div>
    </section>
  )
}

export default Hero