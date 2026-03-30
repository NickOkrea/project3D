
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Minecraft(props) {
  const { nodes, materials } = useGLTF('./minecraft/Minecraft.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="pisso"
          castShadow
          receiveShadow
          geometry={nodes.pisso.geometry}
          material={materials.Chisel}
          userData={{ name: 'pisso' }}
        />
        <group name="troncos" userData={{ name: 'troncos' }}>
          <mesh
            name="Cube122"
            castShadow
            receiveShadow
            geometry={nodes.Cube122.geometry}
            material={materials.Tronco_Tapa}
          />
          <mesh
            name="Cube122_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube122_1.geometry}
            material={materials.Tronco}
          />
        </group>
        <mesh
          name="rejilla"
          castShadow
          receiveShadow
          geometry={nodes.rejilla.geometry}
          material={materials.Block_1}
          userData={{ name: 'rejilla' }}
        />
        <mesh
          name="cubos_musgo"
          castShadow
          receiveShadow
          geometry={nodes.cubos_musgo.geometry}
          material={materials.Musgo}
          userData={{ name: 'cubos_musgo' }}
        />
        <mesh
          name="cubo_ladrillo"
          castShadow
          receiveShadow
          geometry={nodes.cubo_ladrillo.geometry}
          material={materials.Pared2}
          userData={{ name: 'cubo_ladrillo' }}
        />
        <group name="horno" userData={{ name: 'horno' }}>
          <mesh
            name="Cube176"
            castShadow
            receiveShadow
            geometry={nodes.Cube176.geometry}
            material={materials.HornoTop}
          />
          <mesh
            name="Cube176_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube176_1.geometry}
            material={materials.HornoParedes}
          />
          <mesh
            name="Cube176_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube176_2.geometry}
            material={materials.Horno}
          />
        </group>
        <group name="mesa" userData={{ name: 'mesa' }}>
          <mesh
            name="Cube186"
            castShadow
            receiveShadow
            geometry={nodes.Cube186.geometry}
            material={materials['table front']}
          />
          <mesh
            name="Cube186_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube186_1.geometry}
            material={materials.Mesa}
          />
        </group>
        <group name="libros_2" userData={{ name: 'libros_2' }}>
          <mesh
            name="Cube194"
            castShadow
            receiveShadow
            geometry={nodes.Cube194.geometry}
            material={materials.block_4_1}
          />
          <mesh
            name="Cube194_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube194_1.geometry}
            material={materials.block_4}
          />
        </group>
        <mesh
          name="barril_1"
          castShadow
          receiveShadow
          geometry={nodes.barril_1.geometry}
          material={materials.block_3}
          userData={{ name: 'barril_1' }}
        />
        <mesh
          name="cubo_sincel"
          castShadow
          receiveShadow
          geometry={nodes.cubo_sincel.geometry}
          material={materials.Caja}
          userData={{ name: 'cubo_sincel' }}
        />
        <mesh
          name="pozo_cubo"
          castShadow
          receiveShadow
          geometry={nodes.pozo_cubo.geometry}
          material={materials.Caja}
          userData={{ name: 'pozo_cubo' }}
        />
        <mesh
          name="chest_1"
          castShadow
          receiveShadow
          geometry={nodes.chest_1.geometry}
          material={materials['Caja 2']}
          userData={{ name: 'chest_1' }}
        />
        <mesh
          name="chest_2"
          castShadow
          receiveShadow
          geometry={nodes.chest_2.geometry}
          material={materials['Caja 2']}
          userData={{ name: 'chest_2' }}
        />
        <mesh
          name="antorchas"
          castShadow
          receiveShadow
          geometry={nodes.antorchas.geometry}
          material={materials.Antorcha}
          userData={{ name: 'antorchas' }}
        />
        <mesh
          name="barril_2"
          castShadow
          receiveShadow
          geometry={nodes.barril_2.geometry}
          material={materials.block_3}
          userData={{ name: 'barril_2' }}
        />
        <group name="musgo" userData={{ name: 'musgo' }}>
          <mesh
            name="Cube266"
            castShadow
            receiveShadow
            geometry={nodes.Cube266.geometry}
            material={materials.musgo_2}
          />
          <mesh
            name="Cube266_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube266_1.geometry}
            material={materials.flores}
          />
        </group>
        <group name="libros_2001" position={[0, -2, 0]} userData={{ name: 'libros_2.001' }}>
          <mesh
            name="Cube296"
            castShadow
            receiveShadow
            geometry={nodes.Cube296.geometry}
            material={materials.block_4_1}
          />
          <mesh
            name="Cube296_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube296_1.geometry}
            material={materials.block_4}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./minecraft/Minecraft.gltf')
