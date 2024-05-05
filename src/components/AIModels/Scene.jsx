import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "/public/Experiment1.jpg";

export default function Model(props) {
  const colorMap = useLoader(TextureLoader, texture.src);
  const { nodes, materials } = useGLTF("/bald.glb");
  return (
    <group scale={1} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          map={colorMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/bald.glb");
