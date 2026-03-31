
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Hand(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/hand/manomovida.glb')
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    // Reproduce todas las animaciones automáticamente
    if (actions && Object.keys(actions).length > 0) {
      Object.values(actions).forEach(action => {
        action?.reset().play()
      })
    }
  }, [actions])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty"
          position={[-0.257, 2.576, 4.712]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={1.218}
        />
        <group name="Armature" scale={1.363}>
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            skeleton={nodes.Cube.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hand/manomovida.glb')