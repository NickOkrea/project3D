import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import * as THREE from "three";
import { normalMap } from "three/src/nodes/TSL.js";

export default function Bricks() {

    const Bricks = () => {
        const basecolor = useLoader(
            TextureLoader, 
            "./bricks/basecolor.jpg"
        );
        /* stone.minFilter = THREE.NearestFilter;
        stone.magFilter = THREE.NearestFilter; */

        const normalMap = useLoader(
            TextureLoader,
            "./bricks/normal.jpg"
        );

        const aoMap = useLoader(
            TextureLoader,
            "./bricks/ao.jpg"
        );

        const roughnessMap = useLoader(
            TextureLoader,
            "./bricks/roughness.jpg"
        );

        const disMap = useLoader(
            TextureLoader,
            "./bricks/displacement.png"
        );

        return { basecolor, normalMap, aoMap, roughnessMap, disMap };  
    }


    return (
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1, 120, 120, 120]} />
            <meshStandardMaterial 
                map={Bricks().basecolor} 
                normalMap={Bricks().normalMap} 
                aoMap={Bricks().aoMap} 
                roughnessMap={Bricks().roughnessMap} 
                displacementMap={Bricks().disMap}
                displacementScale={0.01} />
        </mesh>
    )
}