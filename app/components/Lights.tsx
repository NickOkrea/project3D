import { Environment } from "@react-three/drei";

export default function Lights() {
    return (
        <>
            {/* <pointLight 
                position={[1, 1, 0]} 
                color={'#ff0000'}
                intensity={2.5}
            /> */}
            <directionalLight
                position={[5, 5, 5]}
                color={'#ffffff'}
                intensity={1.4}
                target-position={[10, 10, 10]}
                castShadow={true}
                shadow-bias={-0.001}

            />
            <Environment files={"./hdr/decor_shop_1k.hdr"} />
            <ambientLight color={'#ffffff'} intensity={0.2} />
        </>
    )
}
