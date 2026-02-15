import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import { useEffect, useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

/* ================= MODEL ================= */

function Model() {
  const { scene } = useGLTF("/models/body.glb");
  const modelRef = useRef();
  const mouseX = useRef(0);
  const { size } = useThree();

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = THREE.FrontSide;
      }
    });
  }, [scene]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = (e.clientX / size.width) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  useFrame((_, delta) => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y += delta * 0.6;

    const mouseInfluence = mouseX.current * 0.18;
    const targetY = modelRef.current.rotation.y + mouseInfluence;

    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      targetY,
      6,
      delta
    );
  });

  return (
    <Center>
      <primitive
        ref={modelRef}
        object={scene}
        scale={size.width < 768 ? 1.4 : 1.9}
      />
    </Center>
  );
}

/* ================= MAIN ================= */

export default function Body() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "120px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent", // inherits parent gradient
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
          height: "75vh",
          minHeight: "600px",
          borderRadius: "32px",
          overflow: "hidden",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 1.8, 5.2], fov: 40 }}
          dpr={[1, 2]}
          gl={{ antialias: true }}
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        >
          <ambientLight intensity={1.8} />
          <directionalLight position={[6, 8, 6]} intensity={2.8} castShadow />
          <directionalLight position={[-6, 6, -6]} intensity={2.2} />
          <Environment preset="city" intensity={1.7} />

          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/models/body.glb");
