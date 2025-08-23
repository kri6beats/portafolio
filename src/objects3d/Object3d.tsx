import {  useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";



useGLTF.preload("/objects3d/Modelo.glb");
export default function ModeloGLB(){
    const {scene}=useGLTF("/objects3d/Modelo.glb");
    return(
        <div style={{width:"100%",height:"100px"}}>
        <Canvas>
        <Suspense fallback={null}>
        <primitive object={scene} scale={0.5}/>
        </Suspense>
        </Canvas>
        </div>
    )
}