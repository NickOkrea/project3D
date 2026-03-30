import {PerspectiveCamera} from "@react-three/drei";

export default function Camera() {

    return (
        <PerspectiveCamera 
            position={[-20, 20, 20]} /* x, y, z */
            makeDefault
            fov={30} />

    )
}