"use client";
import Model from "@/components/AIModels/Scene"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { lazy,Suspense, useRef } from "react";


export default function Scene() {
  const ref = useRef();

  return (
    <main>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
        // style={{height: "10vh" }}
        className="!h-[7vh] !md:h-[10vh]"
      >
        <Suspense fallback={"loading"}>
          <Stage
            //   @ts-ignore
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment={null}
          >
            false
            <Model />
            false
          </Stage>
        </Suspense>
        {/* @ts-ignore */}
        <OrbitControls ref={ref} autoRotate enableZoom={false} />
      </Canvas>
    </main>
  );
}
