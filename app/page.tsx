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
import * as THREE from "three";





export default function Home() {

  
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full h-150">
          <Canvas
            style={{backgroundColor:"white"}}
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
              <Minecraft />
              
            </Suspense>
           

            
            <OrbitControls target={[1, 10, 0]}/>
          </Canvas>
          
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
