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
      <div className="col-span-2 lg:col-span-1 h-full">
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
              <Minecraft />
              
            </Suspense>
           

            
            <OrbitControls target={[1, 10, 0]}/>
          </Canvas>
          
      </div>

      {/* main */}
      <main className="col-span-3 lg:col-span-1 absolute lg:relative right-0 lg:right-auto h-full w-3/4 lg:w-auto pl-5 bg-transparent backdrop-blur-md overflow-scroll z-10 lg:z-auto lg:backdrop-blur-none">
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
      Harum consequuntur fuga adipisci sapiente veniam
      asperiores sint eum dolor corporis. Ipsa cum nihil,
      perferendis officia harum ex nam ullam provident
      explicabo sequi aut, tenetur doloribus ratione
      praesentium molestiae minima velit debitis?
      Facere laudantium praesentium repellendus harum
      placeat quasi nesciunt recusandae consectetur deleniti
      ullam quam, dicta, fuga illo repellat perspiciatis,
      facilis officiis consequuntur? Quia, nostrum eligendi,
      explicabo ex quasi animi dignissimos ab, esse quibusdam
      et suscipit veritatis officiis soluta obcaecati!
      Labore voluptatem similique eligendi dicta explicabo
      beatae quos ab nostrum quod facere earum, minus ea optio
      a sapiente aspernatur? Possimus molestiae quasi
      quos fugiat blanditiis quae iste ipsum voluptas voluptatibus
      laboriosam odio, odit laudantium fuga alias dolores
      velit expedita, mollitia animi placeat magni est?
      Nihil nostrum neque libero. Pariatur vitae voluptates,
      esse excepturi vel totam minima quisquam natus cum
      minus aliquam culpa ipsum, iste odit ipsa, atque
      repellat enim doloremque sunt. Accusantium molestias
      non officia? Sapiente a tenetur, quasi sint facere
      eaque sunt eum facilis autem perspiciatis architecto.
      Maiores, ipsum quos aperiam laboriosam deleniti exercitationem
      iure ducimus aut labore odio eveniet aliquam autem,
      architecto impedit laborum hic esse incidunt fugiat enim obcaecati
      qui! Architecto ex velit sint dolores pariatur ullam repellat,
      nobis necessitatibus nihil cupiditate quod, veniam facere
      deserunt voluptate quo rem similique laudantium delectus
      voluptatem nemo totam. Consequatur sunt consectetur velit
      maxime, consequuntur culpa praesentium, omnis optio deserunt
      officiis provident assumenda incidunt eius adipisci?
      Animi voluptatibus quo vero cumque sapiente totam maiores quas,
      minima autem ducimus, reprehenderit atque ut porro suscipit
      aliquid dicta aperiam ipsa quis hic. Ducimus ipsam repudiandae
      ipsum dignissimos animi quas perferendis, provident,
      ullam expedita numquam eaque, aliquam nulla? Facilis
      quisquam architecto, ab nam nostrum officia sed nobis
     </p>

      </main>

      </div>
    </div>
  );
}
