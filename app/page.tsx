"use client"

import { Canvas, useLoader } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Image from "next/image";
import Camera from "./components/camera";
import Matcap from "./components/matcap";
import { Suspense } from "react";
import Bricks from "./components/bricks";
import Lights from "./components/Lights";
import Minecraft from "./components/Minecraft";
import { Hand } from "./components/Hand";
import * as THREE from "three";





export default function Home() {

  
  
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between bg-black">
      
      <nav className="w-full h-16 flex items-center justify-between px-10 bg-amber-900 lg:w-auto">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul className="flex items-center gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      
      <div className="relative h-full w-full grid grid-cols-4 lg:grid-cols-2">
    

      {/* modelo 3d */}      
      <div className="col-span-2 lg:col-span-1 h-[60%] lg:h-full">
          <Canvas
            style={{backgroundColor:"black" }}
            shadows
            gl={{
              antialias: true,
              toneMapping: THREE.ReinhardToneMapping,
              toneMappingExposure: 1.5
            }}
          >
            <Camera/>
            <Lights />
            
            <Suspense fallback={null}>   
              {/* <Bricks /> */}
              <Hand position={[0, 0, 0]} />
              
            </Suspense>
           

            
            <OrbitControls 
              target={[0, 2, 0]}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
              minDistance={4.9}
              maxDistance={5.1}
            />
          </Canvas>
          
      </div>

      {/* main */}
      <main className="col-span-3 lg:col-span-1 absolute lg:relative right-0 lg:right-auto h-full w-3/4  lg:w-auto pl-5 bg-amber-500/50 backdrop-blur-xs overflow-scroll z-10 lg:z-auto lg:backdrop-blur-none">
      <p>Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Doloremque vero amet
      deleniti quia minima dolores nam, accusamus
      cum nesciunt totam perferendis quos,
      quod tenetur, exercitationem ipsam
      eveniet illum natus omnis reprehenderit
      doloribus! Enim expedita soluta fuga,
      quia, consequuntur non temporibus,
      nostrum voluptas exercitationem
      saepe officiis repellat tempora
      omnis totam eos minima reprehenderit
      distinctio dolores excepturi architecto aspernatur nulla?
      Laudantium nemo exercitationem deserunt?
      Beatae eligendi praesentium porro ullam,
      quasi sapiente illum harum cupiditate,
      explicabo quos, quia inventore corrupti
      neque sequi. Fugiat, beatae libero incidunt
      aliquid nisi quaerat impedit, saepe illum possimus
      in vel aspernatur tempore eius? Officia, voluptas.
     </p>

      </main>

      </div>
    </div>
  );
}
