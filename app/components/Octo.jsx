
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Octo(props) {
  const { nodes, materials } = useGLTF('./octo/OctoPW.glb')
  return (
    <group {...props} dispose={null} rotation={[0, -Math.PI / 2, 0]} scale={[3, 3, 3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_2016e2c8-65ca-4d1c-851b-7c482389f708'].geometry}
        material={materials['tripo_material_2016e2c8-65ca-4d1c-851b-7c482389f708']}
      />
    </group>
  )
}

useGLTF.preload('./octo/OctoPW.glb')
