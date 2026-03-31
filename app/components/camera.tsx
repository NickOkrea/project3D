import {PerspectiveCamera} from "@react-three/drei";

export default function Camera() {

    return (
        <PerspectiveCamera 
            position={[0, 2, 5]} /* x, y, z */
            makeDefault
            fov={80} />

    )
}