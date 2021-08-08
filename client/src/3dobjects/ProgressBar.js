/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Icon(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/progressBar.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-1.02, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.34, 0, 0]}>
          <group position={[-0.34, 0, 0]}>
            <mesh geometry={nodes.Mesh_0.geometry} material={materials.Default} position={[-0.34, 0, 0]} />
            <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} position={[1.7, 0, 0]} />
            <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} position={[-0.34, 0, 0]} />
            <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} position={[1.7, 0, 0]} />
            <mesh geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material} position={[1.7, 0, 0]} />
            <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} position={[1.7, 0, 0]} />
            <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} position={[1.7, 0, 0]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/progressBar.glb')