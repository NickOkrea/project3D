import {PerspectiveCamera} from "@react-three/drei";

export default function Camera() {

    return (
        <PerspectiveCamera 
            position={[0, 5, 6]} /* x, y, z */
            makeDefault
            fov={75} />

    )
}