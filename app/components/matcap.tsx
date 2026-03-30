import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function Matcap() {
    
    const matcapTexture = () => {
        const matcap = useLoader(
            TextureLoader, 
            "./matcaps/matcap5.png"
        );
        return matcap;
    }

    return (
        <mesh position={[0, 0, 0]}>
            <torusKnotGeometry args={[1, 0.3, 100, 100]} /> {/* Radio, radio del tubo, segmentos radiales, segmentos tubulares */}
            <meshMatcapMaterial matcap={matcapTexture()} />
        </mesh>   
    )
}